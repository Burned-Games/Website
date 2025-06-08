class AssetManager {
    private basePath: string;

    constructor() {
        this.basePath = process.env.PUBLIC_URL || '';
    }

    // Métodos para diferentes tipos de assets
    image(filename: string): string {
        return `${this.basePath}/assets/images/${filename}`;
    }

    video(filename: string): string {
        return `${this.basePath}/assets/videos/${filename}`;
    }

    model(filename: string): string {
        return `${this.basePath}/assets/models/${filename}`;
    }

    icon(filename: string): string {
        return `${this.basePath}/assets/icons/${filename}`;
    }

    data(path: string): string {
        return `${this.basePath}/data/${path}`;
    }

    // Assets específicos predefinidos
    get images() {
        return {
            logo: this.image('logo.png'),
            logoWebp: this.image('logo.webp'),
            gameLogo: this.image('TLM_Logo.webp'),
            linux: this.image('linux.png'),
            windows: this.image('windows.png'),
        };
    }

    get videos() {
        return {
            background: this.video('background.mp4'),
        };
    }

    get models() {
        return {
            pipes: this.model('P_pipes_1/P_Pipes_1.gltf'),
        };
    }

    // Método específico para dossiers
    dossier(memberId: string, filename: string): string {
        return this.data(`dossier/${memberId}/${filename}`);
    }
}

export const assets = new AssetManager();
export default assets;