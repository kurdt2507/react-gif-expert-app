import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid />', () => {
    const category = 'Caballeros del zodiaco';

    test('Valida que se cargue correctamente el componente comparando con el snapshot', () => {
        // Simula el llamado a la función useFetchGifs devolviendo los valores por defecto
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        const gifs = [{
            id: "HnjlAWqut92E",
            title: "saint seiya GIF",
            url: "https://media0.giphy.com/media/HnjlAWqut92E/giphy.gif?cid=6bfbe4d0olhqc3xwt6ktg3gopquq1njjdj02f07tkbrsc99t&rid=giphy.gif"
        }];
        // Simula el llamado a la función useFetchGifs devolviendo el arreglo de imágenes
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
