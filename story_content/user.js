function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bi65OGesxc":
        Script1();
        break;
  }
}

function Script1()
{
  // Récupération des variables provenant de Storyline
var nom = player.GetVar("Nom");
var prenom = player.GetVar("Prenom");

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

