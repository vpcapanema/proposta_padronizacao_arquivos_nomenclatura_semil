# Aplicação Web - Proposta de Padronização de Nomenclatura

## 📋 Sobre

Esta é uma aplicação web interativa para apresentar a **Proposta de Padronização de Nomenclatura de Arquivos e Atributos** da Subsecretaria de Logística do Estado de São Paulo.

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Navegue até a pasta `webapp`
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari)

### Opção 2: Servidor Local (Recomendado)
Para melhor desempenho, use um servidor web local:

**Python 3:**
```powershell
cd webapp
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

**Node.js (http-server):**
```powershell
cd webapp
npx http-server -p 8000
```

**VS Code Live Server:**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📁 Estrutura dos Arquivos

```
webapp/
├── index.html       # Estrutura principal da aplicação
├── styles.css       # Estilos visuais
├── script.js        # Funcionalidades interativas
└── README.md        # Este arquivo
```

## ✨ Funcionalidades

### 1. **Pesquisa Normativa**
- Timeline interativa com instrumentos normativos
- Análise da situação atual no Estado de São Paulo
- Padrões internacionais aplicáveis

### 2. **Proposta de Padronização**
- Abas navegáveis com diferentes tipos de arquivos
- Exemplos práticos e detalhados
- Regras técnicas de nomenclatura
- Especificação de metadados

### 3. **Ferramentas Interativas**

#### **Validador de Nomenclatura**
- Valida se o nome do arquivo está conforme o padrão
- Suporta arquivos geoespaciais e não geoespaciais
- Feedback detalhado sobre erros encontrados

#### **Gerador de Nomenclatura**
- Gera automaticamente nomes padronizados
- Formulário intuitivo com campos específicos
- Opção de copiar para área de transferência

#### **Checklist de Conformidade**
- Lista de verificação interativa
- Marca itens verificados
- Feedback visual

### 4. **Exemplos Práticos**
- Projetos completos com estrutura de pastas
- Tabelas de atributos
- Casos de uso reais

### 5. **Plano de Implementação**
- Cronograma em 4 fases
- Responsabilidades definidas
- Entregas esperadas

## 🎨 Design e Usabilidade

- **Responsivo**: Funciona em desktop, tablet e mobile
- **Acessível**: Cores contrastantes e navegação clara
- **Interativo**: Animações suaves e feedback visual
- **Imprimível**: Layout otimizado para impressão

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Grid e Flexbox
- **JavaScript (Vanilla)**: Funcionalidades interativas
- **Font Awesome**: Ícones

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Opera 76+

## 🎯 Principais Seções

1. **Início**: Visão geral e estatísticas
2. **Pesquisa Normativa**: Base legal e normativa
3. **Proposta**: Especificação completa
4. **Exemplos**: Casos práticos
5. **Implementação**: Cronograma e responsabilidades
6. **Ferramentas**: Validador e gerador

## 💡 Dicas de Uso

### Para Apresentações
1. Use o modo tela cheia (F11)
2. Navegue pelas seções com os links do menu
3. Demonstre as ferramentas interativas ao vivo

### Para Treinamento
1. Comece pela seção "Pesquisa Normativa"
2. Mostre os exemplos práticos
3. Pratique com o validador e gerador
4. Use o checklist como guia de verificação

### Para Documentação
1. Imprima as páginas relevantes (Ctrl+P)
2. O layout se adapta automaticamente para impressão
3. Navegação e ferramentas são ocultadas na impressão

## 🔍 Validação de Nomenclatura

### Padrão Geoespacial
```
SUBLOG_[TEMA]_[DESCRICAO]_[ESCALA]_[ANO]_v01.extensao
```
**Exemplo:** `SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.gpkg`

### Padrão Não Geoespacial
```
SUBLOG_[CATEGORIA]_[DESCRICAO]_[DATA]_v01.extensao
```
**Exemplo:** `SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf`

## ⚙️ Personalização

### Cores do Governo SP
As cores principais podem ser alteradas no arquivo `styles.css`:
```css
--primary-color: #0055A5;    /* Azul Governo SP */
--secondary-color: #00A859;   /* Verde */
--accent-color: #FFB81C;      /* Amarelo */
```

### Adicionar Novas Categorias
No arquivo `script.js`, localize a seção de categorias e adicione:
```javascript
<option value="NOVA_CATEGORIA">NOVA_CATEGORIA</option>
```

## 📞 Suporte

Para dúvidas ou sugestões sobre a padronização:
- **E-mail**: padronizacao.sublog@sp.gov.br
- **Telefone**: (11) XXXX-XXXX

## 📄 Documentos Relacionados

- `proposta_padronizacao_nomenclatura.md` - Proposta completa
- `pesquisa_normas.md` - Pesquisa normativa detalhada
- `guia_rapido_nomenclatura.md` - Guia rápido de referência

## 🚀 Melhorias Futuras

- [ ] Integração com API para validação em tempo real
- [ ] Exportação de relatórios em PDF
- [ ] Histórico de validações e gerações
- [ ] Templates para download
- [ ] Modo escuro
- [ ] Suporte a múltiplos idiomas
- [ ] Integração com sistemas de gestão documental

## 📝 Changelog

### Versão 1.0 (21/01/2026)
- ✨ Lançamento inicial
- ✅ Pesquisa normativa completa
- ✅ Proposta detalhada
- ✅ Ferramentas interativas (validador e gerador)
- ✅ Exemplos práticos
- ✅ Plano de implementação
- ✅ Design responsivo

## 📜 Licença

© 2026 Governo do Estado de São Paulo. Todos os direitos reservados.

---

**Desenvolvido para a Subsecretaria de Logística do Estado de São Paulo**  
**Versão 1.0 - Janeiro 2026**
