
## Autor
- Breno Godoy Costa
- [@Github](https://www.github.com/BrenoGodoy)
- [@Linkedin](https://www.linkedin.com/in/brenogodoycosta/)
- Telefone -  (21) 99375-3501
- Email - godoyy25z@gmail.com

## Documentação da API

ATENÇÃO: Todas as rotas devem receber no Header uma chave 'secret' com a string 'naranja-labs', caso contrário o acesso será negado.

OBS: O arquivo .env está exposto e já vem com o projeto apenas para facilitar, normalmente estaria no gitignore

## Rotas

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

POST - /api/job/[id]
-> Deve retornar um único 'job' com base no ID passado como parâmetro;
```bash
{
	"id": 1,
	"job": "Full Stack Developer",
	"level": "Junior",
	"status": "open"
}
```

POST - /api/job/submit
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

## Front-end

ATENÇÃO: Ao vizualizar a tela no seu computador utilize 1920x1080 como padrão, pois não foi utilizado responsividade!

Tela do Front-end (1920x1080):

![Captura de tela de 2024-04-13 01-42-31](https://github.com/BrenoGodoy/BrenoGodoy/assets/98183800/0c7dc502-8f72-4e1a-a302-7195783a4418)

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:BrenoGodoy/fullstack-junior-challenge.git
```
Entre no projeto

```bash
cd fullstack-junior-challenge
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Pronto! Agora você tem rodando em http://localhost:3000/ a página web e a API. Basta entrar em http://localhost:3000/ na web para acessar o front e fazer as requisições para a mesma URL para acessar as rotas da API.
