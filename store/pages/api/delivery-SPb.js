
export default function handler(req, res) {
    const body = req.body;

    console.log('body: ', body);

    if (!body.f_name) {
        return res.status(400).json({ data: 'Имя не найдено' });
    } else if (!body.l_name) {
        return res.status(400).json({ data: 'Фамилия не найдена' });
    } else if (!body.phone) {
        return res.status(400).json({ data: 'Номер телефона не найден' });
    } else if (!body.address) {
        return res.status(400).json({ data: 'Адрес не найден' });
    }

    res.status(200).json({ data: `${body.l_name} ${body.f_name} ${body.m_name} ${body.email} ${body.phone} ${body.address}` });
}