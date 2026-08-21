export type CustomerEnquiry = {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  county: string | null;
  location: string;
  service_interest: string | null;
  property_type: string | null;
  message: string | null;
  estimated_area_sqm: number | null;
  estimated_cost: number | null;
  request_type: string;
  preferred_date: string | null;
  source: string;
  status: string;
  created_at: string;
};

export type PainterApplication = {
  id: string;
  full_name: string;
  age: number;
  phone: string;
  email: string | null;
  county: string;
  location: string;
  specialty: string;
  years_experience: number | null;
  availability: string | null;
  has_spray_painting_experience: boolean | null;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
};
