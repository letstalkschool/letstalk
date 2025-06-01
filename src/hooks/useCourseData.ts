
import { useQuery } from '@tanstack/react-query';
import { Course } from '@/config/courses';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1deBBlA2i1cTZuVKRpdghTxBlxgeLskXur3M1XczXxPV1H7tAXvxjsS_pWH8IUxPlfEWIUwO-shZS/pub?gid=0&single=true&output=csv';

const parseCsvToCourses = (csvText: string): Course[] => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  
  return lines.slice(1).map((line, index) => {
    const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
    const course: any = {
      features: [] // Initialize features as empty array
    };
    
    headers.forEach((header, i) => {
      const value = values[i] || '';
      
      switch (header.toLowerCase()) {
        case 'id':
          course.id = value;
          break;
        case 'title':
          course.title = value;
          break;
        case 'description':
          course.description = value;
          break;
        case 'duration':
          course.duration = value;
          break;
        case 'level':
          course.level = value;
          break;
        case 'ispopular':
          course.isPopular = value.toLowerCase() === 'true';
          break;
        case 'pricing_amount':
          if (value) {
            course.price = { 
              amount: parseInt(value), 
              currency: 'PLN', 
              period: 'lekcja' 
            };
          }
          break;
        case 'timing_frequency':
          if (value) {
            course.schedule = { 
              frequency: value, 
              duration: values[headers.indexOf('timing_session')] || '60 minut' 
            };
          }
          break;
        case 'timing_session':
          if (course.schedule) {
            course.schedule.duration = value;
          }
          break;
        default:
          // Handle multiple feature columns (features_1, features_2, etc.)
          if (header.toLowerCase().startsWith('features_') && value) {
            course.features.push(value);
          }
          break;
      }
    });
    
    // Ensure all required fields have default values
    if (!course.features) course.features = [];
    if (!course.schedule) {
      course.schedule = { frequency: '', duration: '' };
    }
    
    console.log(`Parsed course ${index + 1}:`, course);
    
    return course as Course;
  });
};

const fetchCourseData = async (): Promise<Course[]> => {
  console.log('Fetching course data from Google Sheets...');
  
  const response = await fetch(CSV_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch course data: ${response.statusText}`);
  }
  
  const csvText = await response.text();
  console.log('Raw CSV data:', csvText);
  
  const courses = parseCsvToCourses(csvText);
  console.log('Parsed courses:', courses);
  
  return courses;
};

export const useCourseData = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourseData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};
