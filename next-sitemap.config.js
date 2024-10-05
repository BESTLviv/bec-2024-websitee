module.exports = {
    siteUrl: process.env.SITE_URL || 'https://best-lviv.org.ua', // правильний домен вашого сайту
    generateRobotsTxt: true, // опціонально генерувати robots.txt
    changefreq: 'daily', // частота перевірки змін сторінки
    priority: 0.7, // пріоритет індексації сторінок
    additionalPaths: async (config) => [
        await config.transform(config, '/partners'), // Додає сторінку /partners
        await config.transform(config, '/organizers'), // Додає сторінку /organizers
      ],
}
