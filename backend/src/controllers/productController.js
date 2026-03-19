import { supabase } from '../config/supabase.js';

// Mocks fallbacks (caso não haja Supabase configurado)
const mockProducts = [
    { id: 1, name: 'Sourdough Rústico', category: 'padaria', type: 'Padaria Artesanal', price: 24.90, img: '/croissant.png' },
    { id: 2, name: 'Croissant Francês', category: 'padaria', type: 'Padaria Artesanal', price: 12.50, img: '/croissant.png' },
    { id: 3, name: 'Pizza Margherita', category: 'pizzaria', type: 'Pizzaria Premium', price: 68.00, img: '/pizza.png' },
    { id: 4, name: 'Pepperoni Premium', category: 'pizzaria', type: 'Pizzaria Premium', price: 74.00, img: '/pizza.png' },
    { id: 5, name: 'Focaccia Clássica', category: 'padaria', type: 'Padaria Artesanal', price: 18.00, img: '/croissant.png' },
    { id: 6, name: 'Pizza 4 Queijos', category: 'pizzaria', type: 'Pizzaria Premium', price: 82.00, img: '/pizza.png' }
];

export const getProducts = async (req, res) => {
    try {
        if (!supabase) {
            // Se não tem banco, responde com o falso para a página não quebrar.
            return res.json({ success: true, data: mockProducts, source: 'mock' });
        }

        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;

        // Se o DB estiver vazio, mandamos o mock temporário
        if (!data || data.length === 0) {
            return res.json({ success: true, data: mockProducts, source: 'mock_fallback_empty_db' });
        }

        return res.json({ success: true, data, source: 'supabase' });
    } catch (err) {
        console.error("Erro em getProducts:", err);
        return res.status(500).json({ success: false, error: 'Erro ao buscar produtos' });
    }
};
