import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de componente <GifGridItem />', () => {
    const title = 'My fake image';
    const url = 'https://localhost/fake_image.png';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('El componente debe coincidir con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Valida que el párrafo coincida con el titulo recibido', () => {
        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
    });

    test('Verifica que la imagen tenga un source y title y que coincidan con los props recibidos', () => {
        const img = wrapper.find('img');
        const { src, alt } = img.props();
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('Comprueba que el div tenga la clase "animate__flipInY"', () => {
        const div = wrapper.find('div');
        const _class = div.prop('className');
        
        expect(_class.includes('animate__flipInY')).toBe(true);
    });
    
});
