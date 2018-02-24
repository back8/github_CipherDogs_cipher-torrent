Vue.use(VueI18n)

const local = {
    en: {
	btn: {
	    seed: 'Seed File',
	    down: 'Download',
	    magnet: 'Magnet',
	    torrent: 'Torrent file',
	    file: 'Get file'
	},
	title: {
	    seed: 'Seeding',
	    down: 'Downloading'
	},
	text: {
	    file: 'File name',
	    hash: 'Hash',
	    size: 'Size'
	}
    },
    ru: {
	btn: {
	    seed: 'Раздать файл',
	    down: 'Скачать',
	    magnet: 'Magnet',
	    torrent: 'Торрент файл',
	    file: 'Получить файл'
	},
	title: {
	    seed: 'Раздача',
	    down: 'Скачивание'
	},
	text: {
	    file: 'Имя файла',
	    hash: 'Хэш',
	    size: 'Размер'
	}
    }
}

const myLocal = new VueI18n({
				locale: 'ru',
				messages: local,
			    })