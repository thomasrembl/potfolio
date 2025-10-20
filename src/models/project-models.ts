import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  order: { type: Number, required: true },
  slug: { type: String, required: true }, 
  imgCover: { type: String, required: true }, 
  filer: [
    {
        filterName: {type : String, default:""}
    }
  ],
  linkUrl: [
      {
          name: { type: String },
          url: { type: String }
        }
    ], 
    imagesUrl: [
        {
            alt: { type: String },
            url: { type: String },
            textId: { type: String},
        }
    ], 
    translation: {
      fr: {
          title: { type: String, required: true },
          category: { type: String, required: true },
          informationText: { type: String, default: "" },
          descriptionText: { type: String, default: "" },
          imageText: [
              {
                  text: { type: String },
                  id: { type: String}
              }
          ]
        },
        en: {
          title: { type: String, required: true },
          category: { type: String, required: true },
          informationText: { type: String , default: ""},
          descriptionText: { type: String, default: "" },
          imageText: [
              {
                  text: { type: String },
                  id: { type: String}
              }
          ]
        },
    }, 
    },
    {
        timestamps: true,
    }
);

// Utilisation de mongoose.models pour éviter la recompilation du modèle
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
