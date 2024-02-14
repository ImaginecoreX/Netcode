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

interface FullScreenImageProps{
  setVisible:Function;
  data?:DiagramCardProps;
}

interface imgObjProps{
  id:number;
  dataObj:DiagramCardProps;
}
interface DiagramCardSetterProps{
  id: number;
  title:string;
  description?:string;
  diagram: string;
  setID:Function;
}