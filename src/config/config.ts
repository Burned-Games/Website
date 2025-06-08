const config = {
    // Base URL
    baseUrl: process.env.PUBLIC_URL || '/',

    // Helper functions para generar rutas dinámicamente
    getAsset: {
        image: (filename: string) => `${process.env.PUBLIC_URL}/assets/images/${filename}`,
        video: (filename: string) => `${process.env.PUBLIC_URL}/assets/videos/${filename}`,
        model: (filename: string) => `${process.env.PUBLIC_URL}/assets/models/${filename}`,
        icon: (filename: string) => `${process.env.PUBLIC_URL}/assets/icons/${filename}`,
        data: (path: string) => `${process.env.PUBLIC_URL}/data/${path}`,
    },

    // Layout defaults
    layout: {
        header: {
            title: "Warhammer 40.000",
            subtitle: "The Last Marine",
            // logoSrc: `${process.env.PUBLIC_URL}/assets/images/logo.png`,
            logoAlt: "Game Logo"
        }
    },

    // Routes configuration
    routes: {
        home: '/',
        game: '/game',
        media: '/media',
        about: '/about',
        downloads: '/downloads'
    },

    // Downloads configuration
    downloads: {
        linux: {
            icon: `${process.env.PUBLIC_URL}/assets/images/linux.png`,
            specs: {
                os: 'Linux 64-bit',
                processor: 'Intel Core i3 or AMD Ryzen 3',
                memory: '8 GB RAM',
                graphics: '4GB NVIDIA GeForce GTX 660 or AMD Radeon HD 7870',
                storage: '3GB available space'
            },
            downloadUrl: 'https://github.com/Burned-Games/W40K-TLM/releases/download/v0.6/W40K-TLM-v0.6.1-linux.zip'
        },
        windows: {
            icon: `${process.env.PUBLIC_URL}/assets/images/windows.png`,
            specs: {
                os: 'Windows 10 64-bit',
                processor: 'Intel Core i3 or AMD Ryzen 3',
                memory: '8 GB RAM',
                graphics: '4GB NVIDIA GeForce GTX 660 or AMD Radeon HD 7870',
                storage: '3GB available space'
            },
            downloadUrl: 'https://github.com/Burned-Games/W40K-TLM/releases/download/v0.6/W40K-TLM-v0.6.1-windows.zip'
        }
    }
};

export default config;