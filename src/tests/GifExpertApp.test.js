import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas sobre <GifExpertApp />', () => {
    test('Valida el componente contra su snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Verifica que la cantidad de GifGrid sea igual a la de elementos enviados en el array', () => {
        const categories = ['Death Note', 'Hinata Hyuga'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
        
});
