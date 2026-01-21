# Pesquisa de Instrumentos Normativos - Padronização de Nomenclatura de Arquivos

## Data da Pesquisa
19 de janeiro de 2026

## 1. INSTRUMENTOS NORMATIVOS IDENTIFICADOS

### 1.1 Dados Geoespaciais

#### Decreto Estadual nº 64.056/2020
**Política de Dados Geoespaciais do Estado de São Paulo**
- Estabelece diretrizes para gestão, produção e compartilhamento de dados geoespaciais
- Define padrões de metadados conforme INDE (Infraestrutura Nacional de Dados Espaciais)
- Referência: Perfil MGB (Metadados Geoespaciais do Brasil)

**Principais Diretrizes:**
- Uso de padrões internacionais (ISO 19115, ISO 19139)
- Nomenclatura baseada em convenções da CONCAR (Comissão Nacional de Cartografia)
- Metadados obrigatórios para todos os dados geoespaciais

### 1.2 Dados Não Geoespaciais

#### Lei de Acesso à Informação (LAI) - Lei Federal 12.527/2011
- Estabelece obrigatoriedade de organização e classificação de informações
- Exige catalogação e gestão documental adequada
- Não especifica nomenclatura, mas exige estrutura lógica

#### e-ARQ Brasil (Modelo de Requisitos para Sistemas Informatizados de Gestão Arquivística)
**Conselho Nacional de Arquivos (CONARQ)**
- Resolução nº 32/2010 do CONARQ
- Define requisitos para gestão arquivística de documentos digitais
- Estabelece padrões para nomenclatura e organização de arquivos

**Principais Diretrizes do e-ARQ Brasil:**
- Nomenclatura descritiva e padronizada
- Estrutura hierárquica de classificação
- Metadados mínimos obrigatórios
- Controle de versão

#### Decreto Estadual SP nº 48.897/2004 e 58.052/2012
**Sistema de Arquivos do Estado de São Paulo (SAESP)**
- Define política de gestão documental
- Estabelece tabela de temporalidade
- Organização por código de classificação

### 1.3 Dados Abertos

#### Decreto Estadual SP nº 61.559/2015
**Política de Dados Abertos do Poder Executivo Estadual**
- Estabelece diretrizes para publicação de dados abertos
- Exige metadados descritivos
- Recomenda formatos abertos e interoperáveis

## 2. BOAS PRÁTICAS INTERNACIONAIS E NACIONAIS

### 2.1 Biblioteca Nacional (Brasil)
**Padrões de Catalogação:**
- MARC21 (Machine-Readable Cataloging)
- Dublin Core para metadados
- Nomenclatura baseada em descritores controlados

### 2.2 Arquivo Nacional
**Diretrizes:**
- Nomenclatura clara e descritiva
- Uso de underscores (_) ou hífens (-) ao invés de espaços
- Evitar caracteres especiais
- Data no formato ISO 8601 (AAAA-MM-DD)
- Versionamento numérico (v01, v02, etc.)

### 2.3 Padrões Internacionais

#### ISO 19115-1:2014
**Metadados Geoespaciais**
- Aplicável a dados geoespaciais
- Define elementos de metadados obrigatórios

#### ISO 15489
**Gestão de Documentos**
- Norma internacional para gestão de registros
- Estabelece princípios para nomenclatura e classificação

#### Dublin Core Metadata Initiative (DCMI)
**Padrão para Metadados**
- 15 elementos básicos de metadados
- Amplamente usado para documentos digitais

## 3. RECOMENDAÇÕES CONSOLIDADAS

### 3.1 Estrutura Geral de Nomenclatura

**Formato Base:**
```
[ORGAO]_[CATEGORIA]_[DESCRICAO]_[DATA]_[VERSAO].[extensao]
```

**Exemplo:**
```
SUBLOG_LOGISTICA_PlanoDistribuicao_2026-01-19_v01.pdf
```

### 3.2 Princípios Fundamentais

1. **Clareza**: Nome deve ser autoexplicativo
2. **Consistência**: Seguir sempre o mesmo padrão
3. **Brevidade**: Máximo de 255 caracteres (limite técnico)
4. **Sem Ambiguidade**: Evitar abreviações não padronizadas
5. **Legibilidade**: Usar CamelCase ou underscore para separação

### 3.3 Regras Técnicas

**PERMITIDO:**
- Letras: A-Z, a-z (sem acentos)
- Números: 0-9
- Separadores: underscore (_), hífen (-)
- Ponto (.) apenas antes da extensão

**NÃO PERMITIDO:**
- Espaços (substituir por _ ou -)
- Caracteres especiais: / \ : * ? " < > | # % & { } $ ! @ + = [ ]
- Acentuação: á, é, í, ó, ú, ã, õ, ç
- Iniciar com número ou caractere especial

### 3.4 Formato de Data
**Padrão ISO 8601:**
- AAAA-MM-DD (2026-01-19)
- AAAAMMDD (20260119) - quando economia de caracteres for necessária

### 3.5 Versionamento
**Formato:**
- v01, v02, v03... (versões principais)
- v01.1, v01.2... (revisões menores)
- Sempre com 2 dígitos mínimo

## 4. PRÓXIMOS PASSOS

1. ✓ Pesquisa de instrumentos normativos concluída
2. ⏳ Elaboração de proposta específica para Subsecretaria de Logística
3. ⏳ Definição de categorias de documentos
4. ⏳ Criação de glossário de abreviações padronizadas
5. ⏳ Elaboração de manual de aplicação

## 5. REFERÊNCIAS

- CONARQ - Conselho Nacional de Arquivos (www.gov.br/conarq)
- Arquivo Nacional - Recomendações para digitalização
- INDE - Infraestrutura Nacional de Dados Espaciais
- ISO 19115:2014 - Geographic information - Metadata
- ISO 15489 - Information and documentation - Records management
- e-ARQ Brasil - Modelo de Requisitos para SIGAD
- Dublin Core Metadata Initiative
- Decreto Estadual SP 64.056/2020
- Decreto Estadual SP 61.559/2015
- Lei Federal 12.527/2011 (LAI)
