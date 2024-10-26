import connectDB from "@/config/database"; // Assurez-vous que le chemin est correct
import ProjectSchema from "@/models/project-models"; // Importez votre modèle de projet
import mongoose from "mongoose"; // Importer mongoose pour la validation d'ID

export const getProjetById = async (id: string): Promise<any | null> => {
    try {
        // Connexion à la base de données
        await connectDB();

        // Vérifier si l'ID est un ObjectId valide
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }

        // Récupérer l'élément dont _id est égal à id
        const course = await ProjectSchema.findById(id);

        // Si le projet n'est pas trouvé
        if (!course) {
            console.log(`[GET_COURSE_BY_ID] Aucun projet trouvé avec l'ID: ${id}`);
            return null;
        }

        return course;
    } catch (error) {
        console.error('[GET_COURSE_BY_ID_ERROR]', error);
        return null;
    }
};
