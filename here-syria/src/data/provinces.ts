export type Province = {
  id: string;
  name: string;
  imageUrl: string; // placeholder image
  alt: string;
  description: string;
};

export const provinces: Province[] = [
  { id: "damascus", name: "دمشق", imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop", alt: "دمشق - معلم تاريخي", description: "العاصمة ومدينة عريقة، أسواق وعمارة تراثية وثقافة متنوعة." },
  { id: "rif-dimashq", name: "ريف دمشق", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", alt: "ريف دمشق - طبيعة", description: "غوطة وبساتين وبلدات جبلية خلابة ومواقع تاريخية." },
  { id: "aleppo", name: "حلب", imageUrl: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1200&auto=format&fit=crop", alt: "حلب - قلعة وأسواق", description: "قلعة وأسواق مسقوفة ومطبخ حلبي عريق وصناعات عريقة." },
  { id: "homs", name: "حمص", imageUrl: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1200&auto=format&fit=crop", alt: "حمص - معلم تاريخي", description: "مدينة على العاصي، تنوع ثقافي وقرب من قلعة الحصن." },
  { id: "hama", name: "حماة", imageUrl: "https://images.unsplash.com/photo-1520975922323-0d76c1d1d0c8?q=80&w=1200&auto=format&fit=crop", alt: "حماة - نواعير", description: "مدينة النواعير على العاصي، تراث مائي وزراعي." },
  { id: "latakia", name: "اللاذقية", imageUrl: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop", alt: "اللاذقية - الساحل", description: "سواحل المتوسط، ميناء ونشاط سياحي صيفي." },
  { id: "tartus", name: "طرطوس", imageUrl: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=1200&auto=format&fit=crop", alt: "طرطوس - ساحل", description: "شاطئ وجزيرة أرواد ومشاهد بحرية هادئة." },
  { id: "idlib", name: "إدلب", imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", alt: "إدلب - طبيعة", description: "مدن منسية ومعالم أثرية وزراعة زيتون." },
  { id: "deir-ezzor", name: "دير الزور", imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", alt: "دير الزور - الفرات", description: "مدينة الفرات وجسوره وامتداد البادية." },
  { id: "hasakah", name: "الحسكة", imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", alt: "الحسكة - نهر الخابور", description: "زراعة الحبوب وملتقى ثقافات على الخابور." },
  { id: "raqqa", name: "الرقة", imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", alt: "الرقة - الفرات", description: "إرث عباسي قديم وسهل الفرات." },
  { id: "daraa", name: "درعا", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop", alt: "درعا - بصرى", description: "بصرى الشام وآثار رومانية وسهول حوران." },
  { id: "sweida", name: "السويداء", imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop", alt: "السويداء - طبيعة", description: "جبل العرب وكروم العنب وطبيعة بركانية." },
  { id: "quneitra", name: "القنيطرة", imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", alt: "القنيطرة - الجولان", description: "هضاب ومياه وينابيع في الجولان." },
];