const mongoose = require('mongoose');
const moment = require('moment');

//model de jours Off pour mongoose
let daysOff = new mongoose.Schema({
    Mo: 
    {
        type : Boolean
    },
    Tu: 
    {
        type : Boolean
    },
    We:
    {
        type : Boolean
    },
    Th:
    {
        type : Boolean
    },
    Fr:
    {
        type : Boolean
    },
    Sa:
    {
        type : Boolean
    },
    Su:
    {
        type : Boolean
    }
});

//model d'heures travaillées pour mongoose
const workingHours = new mongoose.Schema({
    start:
    {
        type: Date
    },
    end:
    {
        type: Date
    }
});


//model de tache pour mongoose
const task = new mongoose.Schema({
    taskId : {
        type : String
    },
    taskName : {
        type : String
    },
    taskDesc : {
        type : String
    },
    taskStart : {
        type : Date
    },
    taskEnd : {
        type : Date
    },
    taskProgress : {
        type : String
    },
    taskColor : {
        type : String
    },
    linkedTask : {
        type : Array
    },
    taskRessources : {
        type : Array
    }
});


//model de tache groupée pour mongoose
const groupTask = new mongoose.Schema({
    name:
    {
        type: String
    },
    start:
    {
        type: Date
    },
    end:
    {
        type: Date
    }
});


//model de ressource pour mongoose
const ressources = new mongoose.Schema({
    name:
    {
        type: String
    },
    cost:
    {
        type: String
    },
    type:
    {
        type: String
    }
});


//model taches liée pour mongoose
const millestones = new mongoose.Schema({
    name:
    {
        type: String
    },
    date:
    {
        type: Date
    }
});


mongoose.model('DaysOff', daysOff);
/*mongoose.model('WorkingHours', workingHours);
mongoose.model('Task', task);
mongoose.model('GroupTask', groupTask);
mongoose.model('Ressources', ressources);
mongoose.model('Millestones', millestones);*/







/*const objectData = new mongoose.Schema(
    {
        daysOff : 
        {
            Mo : false, Tu : false, We : false, Th : false, Fr : false, Sa : true, Su : true 
        },
        workingHours :
        {
            start : moment().startOf('hour').add(8), end: moment().endOf('hour').add(17)
        },
        task :
        [{
            id : 0, name : "tache 1", desc : "toto", start : moment().format("MMM Do YY"), end : moment().format("MMM Do YY"), percentageProgress : 50, color  : "#fc0202", linkedTask : [], ressources : [] 
        }],
        groupTask :
        [{ 
            name : "redTeamGroupe", start : Date.now(), end : Date.now() 
        }],
        resources : 
        [{ 
            name : "David", cost : 500, type : "humain",
            name : "Anthony", cost : 500, type : "humain" 
        }],
        milestones : 
        [{ 
            name : "Taches 1", date : Date.now(),
            name : "Taches 1", date : Date.now(),

        }] 
    })*/