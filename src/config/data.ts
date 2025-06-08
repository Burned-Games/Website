class DataManager {
    private basePath: string;

    constructor() {
        this.basePath = process.env.PUBLIC_URL || '';
    }

    // Métodos para diferentes tipos de datos
    members(filename: string): string {
        return `${this.basePath}/data/members/${filename}`;
    }

    dossier(memberId: string, filename?: string): string {
        if (filename) {
            return `${this.basePath}/data/dossier/${memberId}/${filename}`;
        }
        return `${this.basePath}/data/dossier/${memberId}`;
    }

    // Método corregido para traducciones - nombres de archivo reales
    translations(language: string): string {
        const fileMap: { [key: string]: string } = {
            'en': 'english',
            'es': 'spanish', 
            'ca': 'catalan'
        };
        const filename = fileMap[language] || 'english';
        return `${this.basePath}/data/text/${filename}.json`;
    }

    downloads(filename: string): string {
        return `${this.basePath}/data/downloads/${filename}`;
    }

    gallery(category: string, filename: string): string {
        return `${this.basePath}/data/gallery/${category}/${filename}`;
    }

    // Método genérico para cualquier ruta de datos
    path(dataPath: string): string {
        return `${this.basePath}/data/${dataPath}`;
    }

    // Datos específicos predefinidos
    get common() {
        return {
            departments: this.members('departments.json'),
            dossierIndex: this.path('dossier/index.json'),
            config: this.path('config.json'),
        };
    }

    // Traducciones predefinidas
    get translationFiles() {
        return {
            en: this.translations('en'),
            es: this.translations('es'),
            ca: this.translations('ca'),
        };
    }

    // Resto del código...
}

export const data = new DataManager();
export default data;