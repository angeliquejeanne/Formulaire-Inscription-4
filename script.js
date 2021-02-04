function f_myForm(){
  
    var regTel=new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$")
    var regDate=new RegExp("^[0-3][0-9][-][0-1][0-9][-][0-9]{4}$");
    var regHeure=new RegExp("^[0-9]{2}[:][0-9]{2}$");
    var regEmail=new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$");
    var regChar=new RegExp("^[A-Z]([a-zâäàéèùêëîïôöçñ][\ -]?){3,}$");
    var regVarChar=new RegExp("^[A-Z]([a-z0-9âäàéèùêëîïôöçñ][\ ._-]?){3,}$");
    var regCP=new RegExp("^[0-9]{5}$");
    var regAdresse=new RegExp("^[0-9]{3}[A-Z]a-z0-9âäàéèùêëîïôöçñ\ ._-]+$");
    var regMdp=new RegExp("^[A-Za-z0-9âäàéèùêëîïôöçñ\ ._-]+$");
  
    var Titre=document.myForm.Titre;
    var Status=document.myForm.Status;
    var Nom=document.myForm.Nom;
    var Prenom=document.myForm.Prenom;
    var Adresse=document.myForm.Adresse;
    var CP=document.myForm.CP;
    var Ville=document.myForm.Ville;
    var Fix=document.myForm.Fix;
    var Mobile=document.myForm.Mobile;
    var Email=document.myForm.Email;
    var Mdp=document.myForm.Mdp;
    var Avatar=document.myForm.Avatar;
    var Commentaire=document.myForm.Commentaire;
    var Mdp_lose=document.myForm.Mdp_lose;
  
    if(Status.value==0){
      Status.focus();
      this.changerBad("status");
      return false;
    }
    else{
      this.changerBon("status");
    }
    if(regChar.test(Nom.value)==false){
      Nom.focus();
      this.changerBad("nom");
      return false;
    }
    else{
      this.changerBon("nom");
    }
    if(regChar.test(Prenom.value)==false){
      Prenom.focus();
      this.changerBad("prenom");
      return false;
    }
    else{
      this.changerBon("prenom");
    }
    if(regAdresse.test(Adresse.value)==false){
      Adresse.focus();
      this.changerBad("adresse");
      return false;
    }
    else{
      this.changerBon("adresse");
    }
    if(regCP.test(CP.value)==false){
      CP.focus();
      this.changerBad("cp");
      return false;
    }
    else{
      this.changerBon("cp");
    }
    if(regVarChar.test(Ville.value)==false){
      Ville.focus();
      this.changerBad("ville");
      return false;
    }
    else{
      this.changerBon("ville");
    }
    if(regTel.test(Fix.value)==false){
      Fix.focus();
      this.changerBad("fix");
      return false;
    }
    else{
      this.changerBon("fix");
    }
    if(regTel.test(Mobile.value)==false){
      Mobile.focus();
      this.changerBad("mobile");
      return false;
    }
    else{
      this.changerBon("mobile");
    }
    if(regEmail.test(Email.value)==false){
      Email.focus();
      this.changerBad("email");
      return false;
    }
    else{
      this.changerBon("email");
    }
    if(regMdp.test(Mdp.value)==false){
      Mdp.focus();
      this.changerBad("mdp");
      return false;
    }
    else{
      this.changerBon("mdp");
    }
  }
  function changerBad(variable){
    document.getElementById(variable).className="bad";
  }
  function changerBon(variable){
    document.getElementById(variable).className="good";
  }