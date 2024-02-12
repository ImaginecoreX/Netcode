interface DataProps{
  id: number;
  title: string;
  description: string;
}

interface CaseStudyCardProps{
  data: DataProps;
}

interface DiagramCardProps{
  id: number;
  title:string;
  description?:string;
  diagram: string;
}