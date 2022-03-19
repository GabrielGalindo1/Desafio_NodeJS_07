/**
 * Required External Modules
 */

 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import { read } from "fs";
 
 const readline = require('readline-sync');
 const db = require('../models/index.js');
 
 
 dotenv.config();
 
 /**
  * App Variables
  */
 
 if (!process.env.PORT) {
	 process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();
 
 /**
  *  App Configuration
  */
 
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 
 /**
  * Server Activation
  */
 
 app.listen(PORT, async () => {
	 console.log(`Listening on port ${PORT}`);
 
 
	 // CÓDIGO PARA ATENDER OS REQUERIMENTOS
	 // R01, R02, R03, R04, R05
		 const qtd = parseInt(readline.question('Qual a quantidade de alunos ?\n'));
 
		 for(let i=0 ; i < qtd ; i++){
 
			 const id = parseInt(readline.question('Qual o id do aluno ?\n'));
 
			 const name = readline.question('Qual o nome do aluno ?\n');
 
			 const grade = parseInt(readline.question('Qual a nota do aluno ?\n'));

			 await db.Aluno.create({id: id, name: name, grade: grade})

			 let mat;

			 const nomeCurso = readline.question('Qual o nome do curso ?\n');
			
			 await db.Aluno.create({nomeCurso: nomeCurso})
			 
			 			
		 }

		 //Consulta simples findAll
		const users = await db.Aluno.findAll(1);
		console.log("All users:", JSON.stringify(users, null));
	
		console.log(users);

		//Update
		const item = await db.Aluno.findByPk(1);
		item.name = "Marcos";
		item.grade = '8';
		item.save();

		console.log(item);
	  
		/**Delete
		await db.Aluno.findByPk(6);
		item.destroy();**/
});
 