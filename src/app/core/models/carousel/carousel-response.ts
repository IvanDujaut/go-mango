/**
 * nos va ayudar para cuando necesitemos importaar 
 * un componente o utilizar un compoennte, sepamos 
 * que debe de si o si traer estas propeidades
 */
export interface CarouselResponse {
    id: number;
    link?: string;
    image: string;
    order?: number;
    marginLeft?: number; // que tanto queremos que haya de separacion entre las imagenes, nos va a yudar en el flujo del carousel
}