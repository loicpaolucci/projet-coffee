import React from "react";
import '../../../assets/styles/forms.scss'

const CreateCofee = () => {

    

    return (
        <div className="crud-container">
            <form className="form-container-cofee">
                <h1 className='form-title'>Mettez votre produit en ligne</h1>
                <div className="halfs-wrapper">
                    <div className="form-half">
                        <label className='text-green'>Nom</label>
                        <input type="text" id="name" name="name" className="form-input green-focus" />
                        <label className='text-green'>Prix</label>
                        <input type="number" id="price" name="price" className="form-input green-focus" />
                        <label className='text-green'>Quantité</label>
                        <input type="number" id="stock" name="stock" className="form-input green-focus" />
                        <input type="submit" value="Mettre en vente" className="btn bg-green text-light no-border" />
                    </div>
                    <div className="form-half">
                        <label className='text-green'>Intensité</label>
                        <select name="intensity" id="intensity" className="form-input green-focus">
                            <option value="corsé">Corsé</option>
                            <option value="un peu corsé">Un peu Corsé</option>
                            <option value="pas corsé">HPas Corsé</option>
                        </select>
                        <label className='text-green'>Pays d'origine</label>
                        <input type="text" id="country" name="country" className="form-input green-focus" />
                        <label className='text-green'>Description</label>
                        <textarea id="description" name="description" className="form-input green-focus" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateCofee