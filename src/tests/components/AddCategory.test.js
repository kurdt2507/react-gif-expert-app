import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas sobre <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Valida que el componente coincida con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Valida el change en el input', () => {
        const input = wrapper.find('input');
        const value = 'Kioña';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe hacer el submit cuando el texto es menor o igual a 2 caracteres', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Kioña';

        input.simulate('change', { target: { value } }); // Simula el input change
        // Simula el submit del formulario
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        expect(setCategories).toHaveBeenCalledTimes(1); // Verifica que se haya llamado 1 vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Valida que se haya llamado con una función
        expect(input.prop('value')).toBe('');
    });
    
});
