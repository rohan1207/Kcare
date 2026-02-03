import { useParams, Navigate } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import ServicePageLayout from '../components/ServicePageLayout';
import { Stethoscope } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  
  // Find the service by slug
  const service = servicesData.find(s => s.slug === slug);
  
  // If service not found, redirect to home
  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Transform the service data to match ServicePageLayout expectations
  // Using bannerimage and cardimage directly from servicesData.json
  const transformedService = {
    title: service.name,
    subtitle: service.overview,
    Icon: Stethoscope,
    image: service.bannerimage || service.cardimage || "/placeholder-service.jpg",
    overview: [service.overview],
    whenToConsult: service.whenToConsult,
    treatmentOptions: service.treatmentOptions,
    whyChooseUs: [service.whyChooseUs],
    timeline: service.journeySteps,
    images: service.galleryimages && service.galleryimages.length > 0 
      ? service.galleryimages 
      : [service.bannerimage || service.cardimage || "/placeholder-service.jpg"],
  };

  return <ServicePageLayout service={transformedService} />;
}
