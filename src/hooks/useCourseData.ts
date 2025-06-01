
import { useQuery } from '@tanstack/react-query';
import { Course } from '@/config/courses';

const SheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1deBBlA2i1cTZuVKRpdghTxBlxgeLskXur3M1XczXxPV1H7tAXvxjsS_pWH8IUxPlfEWIUwO-shZS/pub?gid=0&single=true&output=csv';

const parseCSVToCourses = (csvText: string): Course[] => {
  console.log('Raw CSV data:', csvText);
  
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  
  const courses: Course[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row: { [key: string]: string } = {};
    
    headers.forEach((header, index) => {
      row[header.trim()] = values[index] ? values[index].replace(/"/g, '').trim() : '';
    });
    
    // Build features array from multiple feature columns
    const features: string[] = [];
    for (let j = 1; j <= 4; j++) {
      const featureKey = `features_${j}`;
      if (row[featureKey] && row[featureKey].trim()) {
        features.push(row[featureKey]);
      }
    }
    
    const course: Course = {
      id: row.id || '',
      title: row.title || '',
      description: row.description || '',
      duration: row.duration || '',
      level: row.level || '',
      features: features,
      isPopular: row.id === 'individual' // Keep individual as popular
    };
    
    // Add schedule if available
    if (row.timing_frequency || row.timing_session) {
      course.schedule = {
        frequency: row.timing_frequency || '',
        duration: row.timing_session || ''
      };
    }
    
    // Add price if available
    if (row.pricing_amount && row.currency_currency) {
      course.price = {
        amount: parseInt(row.pricing_amount) || 0,
        currency: row.currency_currency || 'PLN',
        period: row.currency_unit || ''
      };
    }
    
    console.log(`Parsed course ${i}:`, course);
    courses.push(course);
  }
  
  console.log('Parsed courses:', courses);
  return courses;
};

export const useCourseData = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      console.log('Fetching course data from Google Sheets...');
      const response = await fetch(SheetURL);
      const csvText = await response.text();
      return parseCSVToCourses(csvText);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
