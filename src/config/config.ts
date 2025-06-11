const config = {
    // Base URL
    baseUrl: process.env.PUBLIC_URL || '/',

    // Layout defaults
    layout: {
        header: {
            title: "Warhammer 40.000",
            subtitle: "The Last Marine",
            logoSrc: `${process.env.PUBLIC_URL}/assets/images/logo.png`,
            logoAlt: "Game Logo"
        }
    },

    // Routes configuration
    routes: {
        home: '/',
        game: '/game',
        media: '/media',
        engine: '/engine',
        about: '/about',
        downloads: '/downloads'
    },

    downloads: {
        linux: {
            icon: `${process.env.PUBLIC_URL}/assets/images/linux.png`,
            specs: {
                minimum: {
                    cpu: 'Intel Core i5-2400 / AMD Ryzen 3 1200 or equivalent',
                    gpu: 'NVIDIA GTX 1050 / AMD RX 560 / Intel Arc A380 or equivalent',
                    vram: '3 GB',
                    ram: '6 GB',
                    storage: '3 GB HDD',
                    os: 'Linux 64-bit'
                },
                recommended: {
                    cpu: 'Intel Core i5-10400 / AMD Ryzen 5 3600 or better',
                    gpu: 'NVIDIA RTX 2060 / AMD RX 6600 XT or better',
                    vram: '6+ GB',
                    ram: '16 GB',
                    storage: '3 GB SSD',
                    os: 'Linux 64-bit'
                }
            },
            downloadUrl: 'https://github.com/Burned-Games/W40K-TLM/releases/download/v1.0/W40K-TLM-v1.5.2-linux.zip'
        },
        windows: {
            icon: `${process.env.PUBLIC_URL}/assets/images/windows.png`,
            specs: {
                minimum: {
                    cpu: 'Intel Core i5-2400 / AMD Ryzen 3 1200 or equivalent',
                    gpu: 'NVIDIA GTX 1050 / AMD RX 560 / Intel Arc A380 or equivalent',
                    vram: '3 GB',
                    ram: '6 GB',
                    storage: '3 GB HDD',
                    os: 'Windows 64-bit'
                },
                recommended: {
                    cpu: 'Intel Core i5-10400 / AMD Ryzen 5 3600 or better',
                    gpu: 'NVIDIA RTX 2060 / AMD RX 6600 XT or better',
                    vram: '6+ GB',
                    ram: '16 GB',
                    storage: '3 GB SSD',
                    os: 'Windows 64-bit'
                }
            },
            downloadUrl: 'https://github.com/Burned-Games/W40K-TLM/releases/download/v1.0/W40K-TLM-v1.5-windows.zip'
        }
    }
};

export default config;