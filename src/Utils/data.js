export const data = {
    "Usuario": {
        "nome": "Thiago dos Santos Silva",
        "email": "ts214343@gmail.com",
        "preferences": {
            "tema": "escuro", 
            "linguagem": "pt-BR", 
            "notificacoes": {
                "email": true, 
                "push": false 
            },
            "atalhos": {
                "abrirMenu": "Ctrl+M", 
                "novaTarefa": "Ctrl+N" 
            }
        },
        "configuracoesPersonalizaveis": {
            "layout": {
                "sidebar": "expandida", 
                "topbar": "fixa" 
            },
            "widgets": [
                {
                    "id": "1",
                    "nome": "Calendário",
                    "posicao": "esquerda-superior"
                },
                {
                    "id": "2",
                    "nome": "Tarefas Recentes",
                    "posicao": "direita-superior"
                }
            ]
        },
        "historico": {
            "login": [
                "2024-12-18T09:15:00Z",
                "2024-12-17T20:40:00Z"
            ],
            "acoesRecentes": [
                {
                    "data": "2024-12-18T10:00:00Z",
                    "descricao": "Criou nova tarefa: 'Estudar Tailwind'"
                },
                {
                    "data": "2024-12-17T21:30:00Z",
                    "descricao": "Atualizou preferências de tema"
                }
            ]
        }
    },
    "Notes": {
        "math": {
            "title": "Álgebra Básica",
            "text": "Revisar propriedades das potências e raízes.",
            "tags": ["matemática", "álgebra", "estudo"],
            "lastModified": "2024-12-18T15:30:00Z"
        },
        "work": {
            "title": "Reunião de equipe",
            "text": "Discutir progresso do projeto e alinhar tarefas para a próxima semana.",
            "tags": ["trabalho", "reunião", "equipe"],
            "lastModified": "2024-12-17T10:15:00Z"
        },
        "personal": {
            "title": "Lista de compras",
            "text": "Leite, pão, ovos, queijo, café.",
            "tags": ["pessoal", "compras"],
            "lastModified": "2024-12-18T12:00:00Z"
        },
        "programming": {
            "title": "API TMDB",
            "text": "Explorar endpoints para busca de filmes e configurações de idioma.",
            "tags": ["programação", "API", "TMDB"],
            "lastModified": "2024-12-18T16:45:00Z"
        }
    }
}
