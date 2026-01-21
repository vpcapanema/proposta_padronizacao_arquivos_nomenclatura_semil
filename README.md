# 🗂️ Proposta de Padronização de Nomenclatura de Arquivos

## Subsecretaria de Logística - Estado de São Paulo

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Sobre o Projeto

Proposta completa de padronização de nomenclatura para arquivos **geoespaciais** e **não geoespaciais** da Subsecretaria de Logística do Estado de São Paulo.

Este projeto inclui:
- ✅ Pesquisa em bases normativas e jurídicas
- ✅ Proposta técnica completa (18 seções)
- ✅ Guia rápido de referência
- ✅ **Aplicação Web Interativa** com validador e gerador de nomenclaturas

---

## 🌐 Acesse a Aplicação Web

**👉 [Clique aqui para acessar a aplicação interativa](https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/)**

A aplicação web oferece:
- 🔍 **Validador de Nomenclaturas**: Verifique se seu arquivo segue o padrão
- 🎯 **Gerador Automático**: Crie nomes padronizados facilmente
- 📚 **Documentação Completa**: Acesse toda a proposta de forma interativa
- ✨ **Interface Moderna**: Design responsivo e acessível

---

## 📁 Estrutura do Projeto

```
padronizacao.documentos/
│
├── README.md                                  # Este arquivo
├── pesquisa_normas.md                        # Pesquisa normativa e jurídica
├── proposta_padronizacao_nomenclatura.md     # Proposta completa (18 seções)
├── guia_rapido_nomenclatura.md              # Guia de referência rápida
│
└── webapp/                                   # Aplicação Web Interativa
    ├── index.html                           # Interface principal
    ├── styles.css                           # Estilos (tema governamental)
    ├── script.js                            # Funcionalidades interativas
    └── README.md                            # Documentação da aplicação
```

---

## 🎯 Padrões de Nomenclatura

### Arquivos Geoespaciais
```
orgao_tema_descricao_escala_ano_versao.extensao
```

**Exemplo:**
```
sublog_logistica_centrosdistribuicao_1-50k_2026_v01.gpkg
```

### Arquivos Não Geoespaciais
```
orgao_categoria_descricao_data_versao.extensao
```

**Exemplo:**
```
sublog_relatorio_gestaomensal_2026-01_v01.pdf
```

---

## 📖 Documentação

### 1. Pesquisa Normativa
- [pesquisa_normas.md](pesquisa_normas.md)
- Base legal: Decreto 64.056/2020, CONARQ, ISO 19115, Dublin Core
- Identificação de lacunas normativas

### 2. Proposta Completa
- [proposta_padronizacao_nomenclatura.md](proposta_padronizacao_nomenclatura.md)
- 18 seções detalhadas
- Regras técnicas, metadados, exemplos práticos
- Plano de implementação

### 3. Guia Rápido
- [guia_rapido_nomenclatura.md](guia_rapido_nomenclatura.md)
- Referência rápida de 1 página
- Checklist de verificação
- Erros comuns

---

## 🚀 Como Usar

### Opção 1: Aplicação Web (Recomendado)
Acesse diretamente: [https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/](https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/)

### Opção 2: Executar Localmente
```bash
# Clone o repositório
git clone https://github.com/vpcapanema/proposta_padronizacao_arquivos_nomenclatura_semil.git

# Navegue até a pasta webapp
cd proposta_padronizacao_arquivos_nomenclatura_semil/webapp

# Abra o index.html no navegador
# Ou use um servidor local (ex: Live Server no VS Code)
```

---

## ✨ Características

### Validador de Nomenclaturas
- ✅ Validação em tempo real
- ✅ Feedback detalhado de erros
- ✅ Suporte para geoespaciais e não geoespaciais

### Gerador Automático
- ✅ Formulário intuitivo
- ✅ Conversão automática para minúsculas
- ✅ Validação de formato
- ✅ Cópia para área de transferência

### Padrões Técnicos
- ✅ 100% em minúsculas
- ✅ Sem acentuação
- ✅ Sem espaços (use underscore)
- ✅ Datas no formato ISO 8601
- ✅ Versionamento controlado

---

## 🎨 Acessibilidade

A aplicação web foi desenvolvida seguindo as diretrizes WCAG 2.1:
- ✅ Labels associados a todos os campos de formulário
- ✅ Atributos ARIA para leitores de tela
- ✅ Contraste adequado de cores
- ✅ Navegação por teclado
- ✅ Compatibilidade com todos os navegadores (incluindo Safari)

---

## 📊 Base Legal

A proposta está fundamentada em:
- **Decreto Estadual 64.056/2020** - Política de Dados Geoespaciais do Estado de São Paulo
- **Resolução CONARQ nº 32/2010** - e-ARQ Brasil
- **Lei Federal 12.527/2011** - Lei de Acesso à Informação (LAI)
- **ISO 19115-1:2014** - Metadados Geoespaciais
- **ISO 15489** - Gestão de Documentos
- **ISO 8601** - Formato de Data e Hora
- **Dublin Core** - Metadados de Recursos

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! 

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📧 Contato

**Subsecretaria de Logística - Estado de São Paulo**

- 📧 Email: padronizacao.sublog@sp.gov.br
- 🌐 Web: [https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/](https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🏆 Versão

**v1.0** - Janeiro 2026

- ✅ Proposta completa de padronização
- ✅ Aplicação web interativa
- ✅ Validador e gerador de nomenclaturas
- ✅ Documentação técnica completa
- ✅ Padrão em minúsculas implementado

---

<div align="center">
  
**Desenvolvido com ❤️ para a Subsecretaria de Logística do Estado de São Paulo**

[🌐 Acessar Aplicação](https://vpcapanema.github.io/proposta_padronizacao_arquivos_nomenclatura_semil/webapp/) | [📖 Documentação](proposta_padronizacao_nomenclatura.md) | [🚀 GitHub](https://github.com/vpcapanema/proposta_padronizacao_arquivos_nomenclatura_semil)

</div>
