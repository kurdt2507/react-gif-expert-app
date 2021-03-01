import '../../helpers/getGifs';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('Debe obtener un array con 10 elementos', async () => {
        const gifs = await getGifs('Naruto');

        expect(gifs.length).toBe(10);
    });
    
    test('Valida el resultado de enviar la categoría vacía', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
    
});
