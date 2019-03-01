<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Entreprise;
class EmployeurController extends Controller
{
    public function inscrire(Request $request){


        $request->validate([
            'raisonSociale' => 'required',
            'adresse' => 'required',
            'numSiret' => 'required|integer|unique:Entreprise',
            'email' => 'required|email',
        ]);

            // ON DOIT CREER UN COMPTE UTILISATEUR ICI !!! 




            // FAITE ATTENTION SVP 


        $entreprise = new Entreprise;

        $entreprise->raisonSociale = $request->get('raisonSociale');
        $entreprise->adresse = $request->get('adresse');
        $entreprise->numSiret = $request->get('numSiret');
        $entreprise->id_compte = '13';
        $entreprise->save();
            
        
    }
}
