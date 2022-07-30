
const yargs=require('yargs')
const notes=require('./notes')
// console.log(yargs.argv);
// console.log(yargs.argv.title);

yargs.command({
    command:'add',
    describe:'adding the notes',
    builder:{
        title:{
            describe:'title of the note!',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note!',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNotes(argv.title,argv.body);
        // console.log(argv);
    }
})

yargs.command({
    command:'remove',
    describe:'removing the notes!',
    builder:{
        title:{
            describe:'title which note you want to remove!',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
        // console.log('remove note!');
    }
})

yargs.command({
    command:'list',
    describe:'list all the notes!',
    handler:()=>{
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes!',
    builder:{
        title:{
            describe:'removing the notes by title!',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNotes(argv.title);
    }
})

yargs.parse();