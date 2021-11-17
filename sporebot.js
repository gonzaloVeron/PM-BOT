const rp = require('request-promise');
const Discord = require("discord.js");
const Region = require('./Region.js');
const Character = require('./Character.js');
const client = new Discord.Client();
const prefix = '-';
const Sword = require('./Sword.js');
const ErrorHandler = require('./Exceptions/ErrorHandler.js');
const Register = require('./Commands/Register.js');
const Characters = require('./Commands/Characters.js');
const ShowMap = require('./Commands/ShowMap.js');
const Move = require('./Commands/Move.js');
const TakeItem = require('./Commands/TakeItem.js');
const EquipItem = require('./Commands/EquipItem.js');
const Inventory = require('./Commands/Inventory.js');
const Attack = require('./Commands/Attack.js');
const Weather = require('./Commands/Weather.js');
const FindItemsInFloor = require('./Commands/FindItemsInFloor.js');

let regions = [];
let characters = [];

let reg1 = new Region("");
let reg2 = new Region("");
let reg3 = new Region("");
let reg4 = new Region("");
let reg5 = new Region("Nix");
let reg6 = new Region("");
let reg7 = new Region("");
let reg8 = new Region("");
let reg9 = new Region("");
let reg10 = new Region("");
let reg11 = new Region("");
let reg12 = new Region("");
let reg13 = new Region("");
let reg14 = new Region("");
let reg15 = new Region("");
let reg16 = new Region("");
let reg17 = new Region("");
let reg18 = new Region("");
let reg19 = new Region("");
let reg20 = new Region("");
let reg21 = new Region("");
let reg22 = new Region("");

regions.push(reg19);
regions.push(reg18);
regions.push(reg17);
regions.push(null);
regions.push(null);

regions.push(reg20);
regions.push(null);
regions.push(reg14);
regions.push(reg15);
regions.push(reg16);

regions.push(reg21);
regions.push(null);
regions.push(reg11);
regions.push(reg12);
regions.push(reg13);

regions.push(reg22);
regions.push(null);
regions.push(reg10);
regions.push(null);
regions.push(null);

regions.push(null);
regions.push(reg7);
regions.push(reg8);
regions.push(reg9);
regions.push(null);

regions.push(null);
regions.push(reg4);
regions.push(reg5);
regions.push(reg6);
regions.push(null);

regions.push(null);
regions.push(reg1);
regions.push(reg2);
regions.push(reg3);
regions.push(null);

reg1.AddRegion("norte", reg4);
reg1.AddRegion("este", reg2);

reg2.AddRegion("norte", reg5);
reg2.AddRegion("este", reg3);
reg2.AddRegion("oeste", reg1);

reg3.AddRegion("norte", reg6);
reg3.AddRegion("oeste", reg2);

reg4.AddRegion("norte", reg7);
reg4.AddRegion("este", reg5);
reg4.AddRegion("sur", reg1);

reg5.AddRegion("norte", reg8);
reg5.AddRegion("este", reg6);
reg5.AddRegion("sur", reg2);
reg5.AddRegion("oeste", reg4);

reg6.AddRegion("norte", reg9);
reg6.AddRegion("sur", reg3);
reg6.AddRegion("oeste", reg5);

reg7.AddRegion("este", reg8);
reg7.AddRegion("sur", reg4);

reg8.AddRegion("norte", reg10);
reg8.AddRegion("este", reg9);
reg8.AddRegion("sur", reg5);
reg8.AddRegion("oeste", reg7);

reg9.AddRegion("sur", reg6);
reg9.AddRegion("oeste", reg8);

reg10.AddRegion("norte", reg11);
reg10.AddRegion("sur", reg8);

reg11.AddRegion("norte", reg14);
reg11.AddRegion("este", reg12);
reg11.AddRegion("sur", reg10);

reg12.AddRegion("norte", reg15);
reg12.AddRegion("este", reg13);
reg12.AddRegion("oeste", reg11);

reg13.AddRegion("norte", reg16);
reg13.AddRegion("oeste", reg12);

reg14.AddRegion("norte", reg17);
reg14.AddRegion("este", reg15);
reg14.AddRegion("sur", reg11);

reg15.AddRegion("este", reg16);
reg15.AddRegion("sur", reg12);
reg15.AddRegion("oeste", reg14);

reg16.AddRegion("sur", reg13);
reg16.AddRegion("oeste", reg15);

reg17.AddRegion("sur", reg14);
reg17.AddRegion("oeste", reg18);

reg18.AddRegion("este", reg17);
reg18.AddRegion("oeste", reg19);

reg19.AddRegion("este", reg18);
reg19.AddRegion("sur", reg20);

reg20.AddRegion("norte", reg19);
reg20.AddRegion("sur", reg21);

reg21.AddRegion("norte", reg20);
reg21.AddRegion("sur", reg22);

reg22.AddRegion("norte", reg21);

let pepillo = new Character("Pepillo");
characters.push(pepillo);
reg5.AddCharacter(pepillo);
pepillo.actualRegion = reg5;


let sword = new Sword("espada_larga", 2);
let sword2 = new Sword("espadon", 6);
reg5.items.push(sword);
reg13.items.push(sword2);

let commands = {}
commands["logear"] = new Register();
commands["jugadores"] = new Characters();
commands["mapa"] = new ShowMap();
commands["mover"] = new Move();
commands["agarrar"] = new TakeItem();
commands["inv"] = new Inventory();
commands["buscar"] = new FindItemsInFloor();
commands["atacar"] = new Attack();
commands["weather"] = new Weather();
commands["equipar"] = new EquipItem();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    let errorHandler = new ErrorHandler(message.channel);
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    // if(message.channel.name === "comandos"){

    if(!characters.some(c => c.getName() === message.author.username) && command != "logear"){
        message.channel.send("Primero debes logearte");
        return;
    }

    try{
        console.log(command);
        commands[command].execute(args, characters, regions, message);
    }catch(error){
        errorHandler.handle(error);
    }
    // }
});
client.login("ODE2NDkzMTY5Mzg5NzMxOTAx.YD7whQ.Pb3NbpF1rueBCC64nwDN_FlnUew");