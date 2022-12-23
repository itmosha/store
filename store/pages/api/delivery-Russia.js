export default function handler(req, res) {
    const body = req.body;

    if (!body.familiya) {
        return res.status(400).json({ data: 'Имя не найдено' });
    } else if (!body.name) {
        return res.status(400).json({ data: 'Фамилия не найдена' });
    } else if (!body.phone) {
        return res.status(400).json({ data: 'Номер телефона не найден' });
    } else if (!body.index) {
        return res.status(400).json({ data: 'Индекс не найден' });
    } else if (!body.address) {
        return res.status(400).json({ data: 'Адрес не найден' });
    }

    res.status(200).json({ data: `${body.familiya} ${body.name} ${body.otchestvo} ${body.email} ${body.phone} ${body.index} ${body.address}` });
}
