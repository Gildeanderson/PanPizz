import { supabase } from '../config/supabase.js';

export const createOrder = async (req, res) => {
    try {
        const { items, total } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ success: false, error: 'O carrinho está vazio.' });
        }

        // Se tivermos Supabase, salvamos. Caso contrário, apenas simulamos sucesso.
        if (supabase) {
            const { data, error } = await supabase
                .from('orders')
                .insert([{ order_items: items, total_price: total, status: 'pending' }]);

            if (error) throw error;
            return res.status(201).json({ success: true, message: 'Pedido criado com sucesso!', data });
        }

        console.log(`[Mock DB] Pedido recebido! Total: R$ ${total.toFixed(2)} | Itens: ${items.length}`);
        return res.status(201).json({ success: true, message: 'Pedido Simulado criado com sucesso!' });

    } catch (err) {
        console.error("Erro em createOrder:", err);
        return res.status(500).json({ success: false, error: 'Erro ao processar o checkout.' });
    }
};
