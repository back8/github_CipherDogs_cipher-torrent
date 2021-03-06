import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en',
    messages: {
        en: {
            btn: {
                seed: 'Seed File',
                down: 'Download',
                magnet: 'Magnet',
                torrent: 'Torrent file',
                file: 'Get file',
                close: 'Close',
                recently: 'Recently'
            },
            title: {
                head: 'Online and offline browser torrent client',
                seed: 'Seeding',
                down: 'Downloading',
                recently: 'Recently'
            },
            text: {
                file: 'File name',
                hash: 'Hash',
                size: 'Size',
                magnet: 'Magnet Link, info hash or http/https url .torrent'
            },
            speed: 'kB/sec'
        },
        ru: {
            btn: {
                seed: 'Раздать файл',
                down: 'Скачать',
                magnet: 'Magnet',
                torrent: 'Торрент файл',
                file: 'Получить файл',
                close: 'Закрыть',
                recently: 'Последние'
            },
            title: {
                head: 'Онлайн и оффлайн браузерный торрент клиент',
                seed: 'Раздача',
                down: 'Скачивание',
                recently: 'Последние скачанное'
            },
            text: {
                file: 'Имя файла',
                hash: 'Хэш',
                size: 'Размер',
                magnet: 'Magnet ссылка, хэш или ссылка на торрент файл'
            },
            speed: 'кБ/сек'
        }
    }
})
