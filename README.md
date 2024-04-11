
## Autor
- Breno Godoy Costa
- [@Github](https://www.github.com/BrenoGodoy)
- [@Linkedin](https://www.linkedin.com/in/brenogodoycosta/)
- Telefone -  (21) 99375-3501
- Email - godoyy25z@gmail.com

## Documentação da API

ATENÇÃO: Todas as rotas devem receber no body uma chave 'secret' com a string 'naranja-labs', caso contrário o acesso será negado.

POST - /api/jobs
-> Deve retornar uma lista com todos os 'jobs'.
```bash
  [
	{
		"id": 1,
		"job": "Full Stack Developer",
		"level": "Junior",
		"status": "open"
	},
	{
		"id": 2,
		"job": "Frontend Developer",
		"level": "Junior",
		"status": "closed"
	},
	{
		"id": 3,
		"job": "Backend Developer",
		"level": "Junior",
		"status": "closed"
	},
	{
		"id": 4,
		"job": "Full Stack Developer",
		"level": "Senior",
		"status": "closed"
	}
]
```

POST - /api/jobs?level=Junior
-> Deve retornar uma lista com todos os 'jobs' que tenham a chave 'level' do mesmo valor da query string que foi passada.
```bash
[
	{
		"id": 1,
		"job": "Full Stack Developer",
		"level": "Junior",
		"status": "open"
	},
	{
		"id": 2,
		"job": "Frontend Developer",
		"level": "Junior",
		"status": "closed"
	},
	{
		"id": 3,
		"job": "Backend Developer",
		"level": "Junior",
		"status": "closed"
	}
]
```

POST - /api/jobs/[id]
-> Deve retornar um único 'job' com base no ID passado como parâmetro;
```bash
{
	"id": 1,
	"job": "Full Stack Developer",
	"level": "Junior",
	"status": "open"
}
```

POST - /api/jobs/submit
-> Deve enviar através do body a seguinte estrutura:
```bash
{
  name: string,
  age: number,
  phone: string,
  state:string,
  city: string
}
```

e, caso esteja tudo certo deverá retornar:

```bash
{
  message: Thank you for your application, ${name}
}
```
