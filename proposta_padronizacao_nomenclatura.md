# PROPOSTA DE PADRONIZAÇÃO DE NOMENCLATURA DE ARQUIVOS E ATRIBUTOS
## Subsecretaria de Logística - Estado de São Paulo

**Data:** 21 de janeiro de 2026  
**Versão:** 1.0

---

## SUMÁRIO EXECUTIVO

Esta proposta estabelece padrões de nomenclatura para arquivos geoespaciais e não geoespaciais da Subsecretaria de Logística, baseando-se em instrumentos normativos vigentes e boas práticas nacionais e internacionais.

---

## 1. FUNDAMENTAÇÃO LEGAL E NORMATIVA

### 1.1 Base Legal
- **Decreto Estadual SP nº 64.056/2020** - Política de Dados Geoespaciais
- **Decreto Estadual SP nº 61.559/2015** - Política de Dados Abertos
- **Lei Federal nº 12.527/2011** - Lei de Acesso à Informação (LAI)
- **Resolução CONARQ nº 32/2010** - e-ARQ Brasil
- **Decreto Estadual SP nº 58.052/2012** - Sistema de Arquivos do Estado (SAESP)

### 1.2 Normas Técnicas de Referência
- ISO 19115-1:2014 (Metadados Geoespaciais)
- ISO 15489 (Gestão de Documentos)
- INDE - Infraestrutura Nacional de Dados Espaciais
- Dublin Core Metadata Initiative

---

## 2. ESTRUTURA DE NOMENCLATURA

### 2.1 ARQUIVOS GEOESPACIAIS

#### Formato Padrão
```
[ORGAO]_[TEMA]_[DESCRICAO]_[ESCALA]_[ANO]_[VERSAO].[extensao]
```

#### Componentes Obrigatórios

| Campo | Descrição | Exemplo | Regras |
|-------|-----------|---------|--------|
| **ORGAO** | Sigla do órgão | SUBLOG, SELOG | 3-6 caracteres, MAIÚSCULAS |
| **TEMA** | Categoria temática | LOGISTICA, TRANSPORTE, INFRAESTRUTURA | Sem espaços, sem acentos |
| **DESCRICAO** | Descrição do conteúdo | RedeArmazenagem, RotasDistribuicao | CamelCase, máx. 30 caracteres |
| **ESCALA** | Escala cartográfica | 1-250k, 1-50k, 1-10k | Formato: 1-XXXk |
| **ANO** | Ano de referência | 2026 | Formato: AAAA |
| **VERSAO** | Versão do arquivo | v01, v02, v01.1 | Formato: vXX ou vXX.X |
| **extensao** | Formato do arquivo | shp, gpkg, geojson, tif | Minúsculas |

#### Exemplos Práticos

**Vetoriais:**
```
SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.shp
SUBLOG_TRANSPORTE_RotasAbastecimento_1-250k_2026_v02.gpkg
SUBLOG_INFRAESTRUTURA_ArmazensEstaduais_1-10k_2026_v01.geojson
```

**Matriciais:**
```
SUBLOG_LOGISTICA_MapaCalorDemanda_1-100k_2026_v01.tif
SUBLOG_INFRAESTRUTURA_OrtoImagemArmazem_1-5k_2026_v01.tif
```

**Projetos:**
```
SUBLOG_LOGISTICA_ProjetoRedeDistribuicao_2026_v01.qgz
SUBLOG_TRANSPORTE_AnaliseRotas_2026_v03.mxd
```

#### Atributos de Metadados Obrigatórios (Conforme INDE/MGB)

```xml
- Título do Recurso
- Data de Referência
- Responsável pela Produção
- Sistema de Referência Espacial (ex: SIRGAS 2000 / UTM Zone 23S - EPSG:31983)
- Escala Equivalente
- Resumo Descritivo
- Palavras-chave
- Restrições de Acesso
- Formato de Distribuição
- Qualidade dos Dados
```

---

### 2.2 ARQUIVOS NÃO GEOESPACIAIS

#### Formato Padrão
```
[ORGAO]_[CATEGORIA]_[DESCRICAO]_[DATA]_[VERSAO].[extensao]
```

#### Componentes Obrigatórios

| Campo | Descrição | Exemplo | Regras |
|-------|-----------|---------|--------|
| **ORGAO** | Sigla do órgão | SUBLOG | 3-6 caracteres, MAIÚSCULAS |
| **CATEGORIA** | Tipo de documento | RELATORIO, CONTRATO, ATA, PLANILHA | MAIÚSCULAS, sem acentos |
| **DESCRICAO** | Descrição objetiva | PlanoAnualCompras, RelatorioMensal | CamelCase, máx. 40 caracteres |
| **DATA** | Data de criação/ref | 2026-01-21, 202601 | AAAA-MM-DD ou AAAAMM |
| **VERSAO** | Versão do documento | v01, v02, v01.1 | Formato: vXX ou vXX.X |
| **extensao** | Formato do arquivo | pdf, docx, xlsx, csv | Minúsculas |

#### Exemplos por Categoria

**DOCUMENTOS ADMINISTRATIVOS:**
```
SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf
SUBLOG_MEMORANDO_SolicitacaoRecursos_2026-01-15_v01.docx
SUBLOG_OFICIO_ComunicacaoInterna_2026-01-21_v01.pdf
SUBLOG_ATA_ReuniaoGerencial_2026-01-10_v01.docx
```

**CONTRATOS E PROCESSOS:**
```
SUBLOG_CONTRATO_PregaoEletronico_123-2026_v01.pdf
SUBLOG_PROCESSO_LicitacaoServicos_456-2026_v02.pdf
SUBLOG_TERMOADITIVO_Contrato123-2026_2026-01-21_v01.pdf
```

**PLANEJAMENTO E GESTÃO:**
```
SUBLOG_PLANO_EstratégicoLogistica_2026-2030_v01.pdf
SUBLOG_PLANILHA_OrcamentoAnual_2026_v03.xlsx
SUBLOG_CRONOGRAMA_ProjetoModernizacao_2026_v02.xlsx
SUBLOG_INDICADORES_DesempenhoTrimestral_2026-T1_v01.xlsx
```

**DADOS TABULARES:**
```
SUBLOG_DADOS_InventarioEstoque_2026-01-21_v01.csv
SUBLOG_DADOS_MovimentacaoMaterial_2026-01_v01.xlsx
SUBLOG_DADOS_CadastroFornecedores_2026-01-21_v01.csv
```

**APRESENTAÇÕES E RELATÓRIOS:**
```
SUBLOG_APRESENTACAO_ResultadosAno_2025_v01.pptx
SUBLOG_RELATORIO_AnaliseDesempenho_2025_v02.pdf
SUBLOG_DASHBOARD_IndicadoresGerenciais_2026-01_v01.pdf
```

**IMAGENS E MULTIMÍDIA:**
```
SUBLOG_FOTO_VisitaTecnicaArmazem_2026-01-15_001.jpg
SUBLOG_VIDEO_TreinamentoSistema_2026-01_v01.mp4
SUBLOG_DIAGRAMA_FluxoProcessos_2026_v02.png
```

---

## 3. CATEGORIAS PADRONIZADAS

### 3.1 Categorias de Documentos

| Categoria | Descrição | Exemplos |
|-----------|-----------|----------|
| **RELATORIO** | Relatórios técnicos e gerenciais | Relatório mensal, anual, de projeto |
| **CONTRATO** | Contratos e termos | Contratos de serviços, fornecimento |
| **PROCESSO** | Processos administrativos | Licitações, processos SEI |
| **ATA** | Atas de reuniões | Reuniões, assembleias |
| **MEMORANDO** | Memorandos internos | Comunicações internas |
| **OFICIO** | Ofícios externos | Comunicações oficiais |
| **PLANO** | Planos estratégicos/operacionais | Plano diretor, plano de ação |
| **PLANILHA** | Planilhas de dados | Controles, orçamentos |
| **CRONOGRAMA** | Cronogramas de projetos | Cronogramas, timelines |
| **DADOS** | Bases de dados tabulares | CSV, Excel com dados brutos |
| **APRESENTACAO** | Apresentações | PowerPoint, slides |
| **MANUAL** | Manuais e procedimentos | Manuais operacionais, POPs |
| **NORMATIVO** | Normas e regulamentos | Portarias, resoluções |
| **FOTO** | Fotografias | Imagens fotográficas |
| **VIDEO** | Vídeos | Gravações, tutoriais |
| **DIAGRAMA** | Diagramas e fluxogramas | Processos, estruturas |

### 3.2 Temas Geoespaciais

| Tema | Descrição | Exemplos |
|------|-----------|----------|
| **LOGISTICA** | Dados de logística | Centros de distribuição, rotas |
| **TRANSPORTE** | Infraestrutura de transporte | Rodovias, ferrovias, portos |
| **INFRAESTRUTURA** | Infraestrutura física | Armazéns, instalações |
| **TERRITORIAL** | Base territorial | Limites, divisões administrativas |
| **AMBIENTAL** | Dados ambientais | Áreas protegidas, recursos naturais |
| **DEMOGRAFICO** | Dados populacionais | Densidade, distribuição |
| **ECONOMICO** | Dados econômicos | Atividades produtivas, mercados |

---

## 4. REGRAS TÉCNICAS DE NOMENCLATURA

### 4.1 Caracteres Permitidos

**✅ PERMITIDO:**
- Letras maiúsculas: A-Z (sem acentos)
- Letras minúsculas: a-z (sem acentos)
- Números: 0-9
- Underscore: _
- Hífen: - (apenas em datas e intervalos)
- Ponto: . (apenas antes da extensão do arquivo)

**❌ NÃO PERMITIDO:**
- Espaços (substituir por underscore)
- Acentuação: á, é, í, ó, ú, ã, õ, ç, etc.
- Caracteres especiais: / \ : * ? " < > | # % & { } $ ! @ + = [ ] ( ) ' `
- Iniciar nome com número
- Múltiplos pontos (exceto em versões: v01.1)

### 4.2 Convenções de Escrita

**CamelCase:** Para descrições compostas
```
✅ PlanoEstratégico → PlanoEstrategico
✅ RelatórioMensal → RelatorioMensal
✅ ÁreaDeDistribuição → AreaDeDistribuicao
```

**Underscore:** Para separar campos principais
```
✅ SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf
❌ SUBLOG-RELATORIO-GestaoMensal-2026-01-v01.pdf
```

### 4.3 Formato de Datas

**Padrão ISO 8601:**
```
AAAA-MM-DD  →  2026-01-21  (completa)
AAAA-MM     →  2026-01     (mensal)
AAAA        →  2026        (anual)
AAAAMMDD    →  20260121    (sem separadores, se necessário)
```

**Para intervalos:**
```
2026-01_a_2026-12  (período anual)
2025_a_2026        (período plurianual)
```

**Para trimestres:**
```
2026-T1  (janeiro a março)
2026-T2  (abril a junho)
2026-T3  (julho a setembro)
2026-T4  (outubro a dezembro)
```

### 4.4 Versionamento

**Versão Principal:**
```
v01, v02, v03, v04, v05...
```

**Versão com Revisão:**
```
v01.1, v01.2  (revisões da versão 1)
v02.1, v02.2  (revisões da versão 2)
```

**Regras:**
- Sempre iniciar em v01
- Usar 2 dígitos mínimo (v01, não v1)
- Incrementar versão principal para mudanças significativas
- Usar revisão (v01.1) para ajustes menores
- Manter histórico de versões anteriores

### 4.5 Limites de Tamanho

| Elemento | Limite | Observação |
|----------|--------|------------|
| **Nome completo** | 255 caracteres | Limite técnico do sistema de arquivos |
| **Recomendado** | 100 caracteres | Para melhor legibilidade |
| **DESCRICAO** | 40 caracteres | Máximo recomendado |
| **CATEGORIA** | 20 caracteres | Usar categorias padronizadas |

---

## 5. ESTRUTURA DE PASTAS

### 5.1 Hierarquia Recomendada

```
SUBLOG/
├── 01_ADMINISTRATIVO/
│   ├── CONTRATOS/
│   ├── PROCESSOS/
│   ├── ATAS/
│   ├── MEMORANDOS/
│   └── OFICIOS/
│
├── 02_PLANEJAMENTO/
│   ├── PLANOS_ESTRATEGICOS/
│   ├── RELATORIOS/
│   ├── CRONOGRAMAS/
│   └── INDICADORES/
│
├── 03_OPERACIONAL/
│   ├── PROCEDIMENTOS/
│   ├── MANUAIS/
│   ├── CHECKLISTS/
│   └── FORMULARIOS/
│
├── 04_DADOS/
│   ├── GEOESPACIAIS/
│   │   ├── VETORIAL/
│   │   ├── MATRICIAL/
│   │   └── PROJETOS/
│   │
│   └── TABULARES/
│       ├── ESTOQUE/
│       ├── MOVIMENTACAO/
│       └── CADASTROS/
│
├── 05_PROJETOS/
│   └── [Nome_Projeto]/
│       ├── DOCUMENTOS/
│       ├── DADOS/
│       └── ENTREGAS/
│
└── 06_ARQUIVOS_GERAIS/
    ├── APRESENTACOES/
    ├── IMAGENS/
    └── VIDEOS/
```

### 5.2 Nomenclatura de Pastas

**Regras:**
- MAIÚSCULAS
- Underscore para separação
- Sem acentos nem espaços
- Numeração opcional para ordenação
- Máximo 30 caracteres

**Exemplos:**
```
✅ 01_ADMINISTRATIVO
✅ CONTRATOS_2026
✅ PROJETO_MODERNIZACAO
❌ 01 - Administrativo
❌ Contratos 2026
❌ Projeto de Modernização
```

---

## 6. METADADOS OBRIGATÓRIOS

### 6.1 Para Arquivos Geoespaciais

**Metadados Mínimos (Conforme INDE):**

```yaml
Identificação:
  - Título do Recurso
  - Data de Criação
  - Data de Publicação
  - Data de Revisão
  - Responsável pela Produção
  - Ponto de Contato
  - Resumo/Abstract (mín. 100 caracteres)
  - Palavras-chave (mín. 3)

Espacial:
  - Sistema de Referência (EPSG)
  - Extensão Geográfica (Bounding Box)
  - Escala Equivalente
  - Nível de Detalhe

Qualidade:
  - Linhagem/Origem dos Dados
  - Precisão Posicional
  - Completude
  - Consistência

Distribuição:
  - Formato de Distribuição
  - Restrições de Acesso
  - Restrições de Uso
  - Licença
```

**Sistema de Referência Padrão:**
```
SIRGAS 2000 / UTM Zone 23S (EPSG:31983)
```

### 6.2 Para Arquivos Não Geoespaciais

**Metadados Mínimos (Conforme e-ARQ Brasil):**

```yaml
Identificação:
  - Título
  - Autor/Produtor
  - Data de Criação
  - Data de Modificação
  - Assunto/Tema
  - Descrição
  - Palavras-chave

Gestão:
  - Código de Classificação (SAESP)
  - Temporalidade
  - Destinação Final
  - Restrições de Acesso
  - Versão

Técnico:
  - Formato de Arquivo
  - Tamanho
  - Software de Criação
  - Checksum (MD5/SHA256)
```

### 6.3 Registro de Metadados

**Para dados geoespaciais:**
- Usar arquivo de metadados XML (ISO 19139)
- Incluir arquivo .xml junto com dados vetoriais
- Preencher metadados no GeoNetwork ou similar

**Para dados não geoespaciais:**
- Usar propriedades do documento (Office, PDF)
- Criar arquivo README.txt na pasta
- Manter planilha de controle de documentos

---

## 7. ATRIBUTOS DE DADOS GEOESPACIAIS

### 7.1 Nomenclatura de Atributos (Campos)

**Regras:**
- Usar nomes descritivos em português
- Sem acentuação
- Sem espaços (usar underscore)
- Máximo 10 caracteres para Shapefile (limitação técnica)
- Sem limite para GeoPackage, GeoJSON
- Usar snake_case (minúsculas com underscore)

**Exemplos:**

**❌ NÃO RECOMENDADO (Shapefile):**
```
Nome Completo  →  muito longo + espaço
ID             →  ambíguo
x              →  não descritivo
```

**✅ RECOMENDADO:**

Para **Shapefile** (limite 10 caracteres):
```
id_local      →  Identificador do local
nome_local    →  Nome do local
tipo_uso      →  Tipo de uso
area_m2       →  Área em m²
perimetro     →  Perímetro
data_cad      →  Data de cadastro
responsav     →  Responsável (abreviado)
```

Para **GeoPackage/GeoJSON** (sem limite):
```
identificador_unico
nome_completo_instalacao
tipo_uso_instalacao
area_construida_m2
capacidade_armazenamento_m3
data_cadastro
data_ultima_atualizacao
responsavel_gestao
situacao_operacional
```

### 7.2 Tipos de Dados Padronizados

| Tipo | Formato | Exemplo | Uso |
|------|---------|---------|-----|
| **ID** | Integer (Long) | 1, 2, 3... | Identificadores únicos |
| **Código** | Text (String) | "SP-001" | Códigos alfanuméricos |
| **Nome** | Text (String) | "Armazém Central" | Nomes e descrições |
| **Data** | Date | 2026-01-21 | Datas |
| **Valor** | Float (Double) | 1234.56 | Valores numéricos com decimais |
| **Quantidade** | Integer | 100 | Contagens inteiras |
| **Área** | Float (Double) | 5000.50 | Áreas (m²) |
| **Status** | Text (String) | "Ativo", "Inativo" | Estados categóricos |
| **Booleano** | Integer (0/1) | 0=Não, 1=Sim | Sim/Não, Verdadeiro/Falso |

### 7.3 Domínios e Listas Controladas

**Criar domínios para campos categóricos:**

```yaml
tipo_instalacao:
  - ARMAZEM
  - CENTRO_DISTRIBUICAO
  - DEPOSITO
  - PATIO
  - TERMINAL

situacao_operacional:
  - ATIVO
  - INATIVO
  - EM_REFORMA
  - DESATIVADO
  - PLANEJADO

nivel_prioridade:
  - ALTA
  - MEDIA
  - BAIXA
  - CRITICA
```

### 7.4 Atributos Obrigatórios Mínimos

**Para qualquer feição geoespacial:**

```
id_unico           Integer (Long)    - Identificador único sequencial
nome               Text              - Nome ou descrição
tipo               Text              - Tipo/categoria (domínio)
data_cadastro      Date              - Data de cadastro
data_atualizacao   Date              - Última atualização
fonte_dados        Text              - Origem dos dados
responsavel        Text              - Responsável pelo cadastro
observacoes        Text              - Campo livre para observações
```

### 7.5 Exemplo Completo - Centros de Distribuição

**Arquivo:** `SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.gpkg`

**Estrutura de Atributos:**

| Campo | Tipo | Tamanho | Descrição | Domínio |
|-------|------|---------|-----------|---------|
| id_centro | Integer | - | ID único do centro | Sequencial |
| codigo_centro | Text | 20 | Código oficial | "CD-XXX-AAAA" |
| nome_centro | Text | 100 | Nome completo | - |
| tipo_centro | Text | 30 | Tipo de centro | DISTRIBUICAO, ARMAZENAGEM, TRANSBORDO |
| endereco | Text | 200 | Endereço completo | - |
| municipio | Text | 60 | Município | - |
| uf | Text | 2 | UF | SP |
| cep | Text | 9 | CEP | XXXXX-XXX |
| area_terreno_m2 | Float | - | Área do terreno (m²) | > 0 |
| area_construida_m2 | Float | - | Área construída (m²) | > 0 |
| capacidade_m3 | Float | - | Capacidade (m³) | > 0 |
| numero_docas | Integer | - | Número de docas | ≥ 0 |
| situacao | Text | 20 | Situação operacional | ATIVO, INATIVO, EM_REFORMA |
| proprietario | Text | 100 | Proprietário | ESTADO, PRIVADO, MISTO |
| data_inauguracao | Date | - | Data de inauguração | AAAA-MM-DD |
| data_cadastro | Date | - | Data de cadastro | AAAA-MM-DD |
| data_atualizacao | Date | - | Última atualização | AAAA-MM-DD |
| responsavel | Text | 100 | Responsável | - |
| telefone | Text | 15 | Telefone de contato | (XX) XXXXX-XXXX |
| email | Text | 100 | E-mail de contato | - |
| observacoes | Text | 500 | Observações gerais | - |

---

## 8. FORMATOS DE ARQUIVO RECOMENDADOS

### 8.1 Dados Geoespaciais

#### Dados Vetoriais

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| **GeoPackage** | .gpkg | ✅ **PREFERENCIAL** | Padrão aberto, sem limitações, suporta múltiplas camadas |
| **Shapefile** | .shp | ✅ Compatibilidade | Limitações: 10 char em campos, 2GB, múltiplos arquivos |
| **GeoJSON** | .geojson | ✅ Web/APIs | Baseado em JSON, leve, interoperável |
| **KML/KMZ** | .kml, .kmz | ⚠️ Visualização | Para Google Earth, limitado |
| **GML** | .gml | ⚠️ Intercâmbio | Padrão OGC, XML, complexo |
| **DXF/DWG** | .dxf, .dwg | ⚠️ CAD | Para integração com CAD |

#### Dados Matriciais

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| **GeoTIFF** | .tif, .tiff | ✅ **PREFERENCIAL** | Com georeferenciamento, compressão |
| **COG** | .tif | ✅ Web/Nuvem | Cloud Optimized GeoTIFF |
| **IMG** | .img | ✅ Erdas Imagine | Comum em sensoriamento remoto |
| **ECW** | .ecw | ⚠️ Compressão | Proprietário, alta compressão |
| **JP2** | .jp2 | ⚠️ Compressão | JPEG 2000, alta compressão |

#### Projetos e Mapas

| Formato | Extensão | Software | Observações |
|---------|----------|----------|-------------|
| QGIS Project | .qgz, .qgs | QGIS | Arquivo compactado (.qgz) preferencial |
| ArcGIS Pro | .aprx | ArcGIS Pro | - |
| ArcMap | .mxd | ArcGIS 10.x | Versão legada |

### 8.2 Dados Não Geoespaciais

#### Documentos

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| **PDF/A** | .pdf | ✅ **PREFERENCIAL** | Padrão para arquivamento de longo prazo |
| PDF | .pdf | ✅ Documentos gerais | Comum, portátil |
| Word | .docx | ⚠️ Edição | Para documentos em elaboração |
| Texto | .txt | ✅ Notas simples | Simples, universal |
| Markdown | .md | ✅ Documentação técnica | Legível, versionável |

#### Planilhas e Dados Tabulares

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| **CSV** | .csv | ✅ **PREFERENCIAL** | Aberto, interoperável, UTF-8 |
| Excel | .xlsx | ⚠️ Planilhas complexas | Para cálculos e análises |
| ODS | .ods | ✅ Código aberto | LibreOffice, padrão aberto |

#### Apresentações

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| PowerPoint | .pptx | ✅ Apresentações | Padrão corporativo |
| PDF | .pdf | ✅ Distribuição | Para compartilhamento final |
| ODP | .odp | ⚠️ Código aberto | LibreOffice Impress |

#### Imagens

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| **PNG** | .png | ✅ Imagens técnicas | Sem perda, transparência |
| **JPEG** | .jpg | ✅ Fotografias | Comprimido, fotografias |
| **TIFF** | .tif | ✅ Alta qualidade | Sem compressão, arquivamento |
| SVG | .svg | ✅ Diagramas vetoriais | Escalável, ideal para diagramas |

#### Multimídia

| Formato | Extensão | Uso Recomendado | Observações |
|---------|----------|-----------------|-------------|
| MP4 | .mp4 | ✅ Vídeos | Padrão, compatível |
| MP3 | .mp3 | ✅ Áudio | Comprimido, universal |

---

## 9. CONTROLE DE VERSÃO E HISTÓRICO

### 9.1 Sistema de Versionamento

**Estrutura de Versão:**
```
vXX.Y
  ↑  ↑
  |  └── Revisão (mudanças menores)
  └───── Versão principal (mudanças significativas)
```

**Quando incrementar:**

| Mudança | Versão | Exemplo |
|---------|--------|---------|
| Mudança significativa de conteúdo | Principal | v01 → v02 |
| Reestruturação completa | Principal | v02 → v03 |
| Correção de erros | Revisão | v01 → v01.1 |
| Ajustes de formatação | Revisão | v01.1 → v01.2 |
| Atualização de dados | Principal | v03 → v04 |

### 9.2 Registro de Alterações

**Criar arquivo de LOG para cada documento importante:**

**Arquivo:** `SUBLOG_PLANO_Estrategico_2026_CHANGELOG.txt`

```txt
# HISTÓRICO DE VERSÕES

## v01 - 2026-01-15
- Criação inicial do documento
- Estrutura básica definida
- Autor: João Silva

## v01.1 - 2026-01-18
- Correção ortográfica
- Ajuste de formatação
- Autor: Maria Santos

## v02 - 2026-01-21
- Inclusão de novos objetivos estratégicos
- Atualização de metas
- Revisão completa do capítulo 3
- Autor: João Silva
```

### 9.3 Arquivamento de Versões Anteriores

**Estrutura de Pastas:**
```
PASTA_DOCUMENTO/
├── ATUAL/
│   └── SUBLOG_PLANO_Estrategico_2026_v02.pdf
│
└── HISTORICO/
    ├── SUBLOG_PLANO_Estrategico_2026_v01.pdf
    ├── SUBLOG_PLANO_Estrategico_2026_v01.1.pdf
    └── SUBLOG_PLANO_Estrategico_2026_CHANGELOG.txt
```

**Regras:**
- Manter sempre a versão mais recente na pasta ATUAL
- Arquivar versões anteriores em pasta HISTORICO
- Não excluir versões anteriores (manter histórico completo)
- Para projetos com muitas versões, compactar arquivos antigos (.zip)

---

## 10. PROCEDIMENTOS DE IMPLEMENTAÇÃO

### 10.1 Fase 1: Preparação (Semanas 1-2)

**Ações:**
1. Aprovação oficial da proposta de padronização
2. Designação de responsável pela implementação
3. Comunicação a todas as áreas envolvidas
4. Elaboração de material de treinamento

**Entregas:**
- Portaria/Instrução Normativa aprovada
- Equipe designada
- Calendário de treinamentos

### 10.2 Fase 2: Capacitação (Semanas 3-4)

**Ações:**
1. Treinamento presencial/online para equipes
2. Distribuição de manual de padronização
3. Criação de FAQ e canal de dúvidas
4. Definição de multiplicadores por área

**Entregas:**
- Equipes capacitadas
- Manual distribuído
- Canal de suporte ativo

### 10.3 Fase 3: Implementação Gradual (Meses 2-3)

**Ações:**
1. Aplicar padrão a todos os documentos NOVOS
2. Iniciar adequação de documentos EXISTENTES prioritários
3. Monitoramento e suporte contínuo
4. Ajustes finos conforme feedback

**Prioridades para adequação:**
1. Dados geoespaciais estratégicos
2. Documentos de planejamento
3. Contratos e processos ativos
4. Bases de dados operacionais
5. Documentos históricos (gradual)

### 10.4 Fase 4: Consolidação (Mês 4 em diante)

**Ações:**
1. Auditoria de conformidade
2. Correção de não conformidades
3. Atualização do manual com lições aprendidas
4. Institucionalização do padrão

**Entregas:**
- 100% dos novos arquivos padronizados
- 80% dos arquivos existentes adequados
- Relatório de implementação

---

## 11. RESPONSABILIDADES

### 11.1 Gestor de Dados (Data Steward)

**Responsabilidades:**
- Zelar pela aplicação dos padrões
- Validar nomenclaturas em casos de dúvida
- Manter glossário de termos atualizado
- Treinar novos colaboradores
- Propor melhorias ao padrão

### 11.2 Produtores de Dados

**Responsabilidades:**
- Aplicar padrões em todos os arquivos criados
- Preencher metadados obrigatórios
- Manter controle de versões
- Solicitar esclarecimentos quando necessário
- Reportar dificuldades de aplicação

### 11.3 Equipe de TI/Geoprocessamento

**Responsabilidades:**
- Configurar sistemas para facilitar aplicação
- Criar templates e formulários padronizados
- Automatizar processos quando possível
- Realizar backups e controle de versões
- Suporte técnico à implementação

### 11.4 Gestores de Área

**Responsabilidades:**
- Garantir aplicação do padrão na área
- Acompanhar conformidade
- Apoiar capacitação das equipes
- Priorizar adequação de documentos existentes

---

## 12. FERRAMENTAS E AUTOMAÇÃO

### 12.1 Validação Automática de Nomenclatura

**Script Python para validação:**

```python
import re
from datetime import datetime

def validar_nomenclatura_geoespacial(nome_arquivo):
    """
    Valida nomenclatura de arquivos geoespaciais
    Formato: ORGAO_TEMA_DESCRICAO_ESCALA_ANO_VERSAO.extensao
    """
    # Padrão regex
    padrao = r'^[A-Z]{3,6}_[A-Z]+_[A-Za-z0-9]+_1-\d+k_\d{4}_v\d{2}(\.\d+)?\.[a-z]+$'
    
    if re.match(padrao, nome_arquivo):
        return True, "✅ Nomenclatura válida"
    else:
        return False, "❌ Nomenclatura inválida - Verifique o padrão"

def validar_nomenclatura_geral(nome_arquivo):
    """
    Valida nomenclatura de arquivos não geoespaciais
    Formato: ORGAO_CATEGORIA_DESCRICAO_DATA_VERSAO.extensao
    """
    padrao = r'^[A-Z]{3,6}_[A-Z]+_[A-Za-z0-9]+_\d{4}(-\d{2}(-\d{2})?)?_v\d{2}(\.\d+)?\.[a-z]+$'
    
    if re.match(padrao, nome_arquivo):
        return True, "✅ Nomenclatura válida"
    else:
        return False, "❌ Nomenclatura inválida - Verifique o padrão"

# Exemplos de uso
arquivos_teste = [
    "SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.shp",
    "SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf",
    "arquivo invalido com espaços.pdf",
]

for arquivo in arquivos_teste:
    if "1-" in arquivo:  # Geoespacial
        valido, msg = validar_nomenclatura_geoespacial(arquivo)
    else:  # Geral
        valido, msg = validar_nomenclatura_geral(arquivo)
    
    print(f"{arquivo}: {msg}")
```

### 12.2 Gerador de Nomes de Arquivos

**Ferramenta web/formulário para gerar nomes padronizados:**

```html
<!-- Template HTML simplificado -->
<form id="geradorNome">
  <select name="orgao">
    <option value="SUBLOG">SUBLOG</option>
  </select>
  
  <select name="categoria">
    <option value="RELATORIO">RELATÓRIO</option>
    <option value="CONTRATO">CONTRATO</option>
    <option value="PLANO">PLANO</option>
    <!-- ... -->
  </select>
  
  <input type="text" name="descricao" placeholder="Descrição (sem espaços)">
  <input type="date" name="data">
  <input type="text" name="versao" placeholder="v01">
  <select name="extensao">
    <option value="pdf">PDF</option>
    <option value="docx">DOCX</option>
    <!-- ... -->
  </select>
  
  <button type="submit">Gerar Nome</button>
  
  <output id="resultado"></output>
</form>
```

### 12.3 Templates de Metadados

**Criar templates XML para metadados geoespaciais:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd">
  <gmd:fileIdentifier>
    <gco:CharacterString>[ID_UNICO]</gco:CharacterString>
  </gmd:fileIdentifier>
  <gmd:language>
    <gco:CharacterString>por</gco:CharacterString>
  </gmd:language>
  <gmd:characterSet>
    <gmd:MD_CharacterSetCode codeList="UTF-8" codeListValue="utf8"/>
  </gmd:characterSet>
  <gmd:contact>
    <gmd:CI_ResponsibleParty>
      <gmd:organisationName>
        <gco:CharacterString>Subsecretaria de Logística - SP</gco:CharacterString>
      </gmd:organisationName>
      <!-- ... -->
    </gmd:CI_ResponsibleParty>
  </gmd:contact>
  <!-- ... mais campos ... -->
</gmd:MD_Metadata>
```

---

## 13. CASOS ESPECIAIS

### 13.1 Arquivos Temporários

**Nomenclatura:**
```
TEMP_[USUARIO]_[DESCRICAO]_[DATA].[extensao]
```

**Exemplos:**
```
TEMP_JoaoSilva_RascunhoRelatorio_2026-01-21.docx
TEMP_MariaSantos_TesteAnalise_2026-01-21.xlsx
```

**Regras:**
- Pasta específica para arquivos temporários
- Exclusão automática após 30 dias
- Não aplicar versionamento rigoroso

### 13.2 Documentos Confidenciais

**Adicionar sufixo de classificação:**
```
[NOMENCLATURA_PADRAO]_[CLASSIFICACAO].[extensao]
```

**Exemplos:**
```
SUBLOG_CONTRATO_Fornecedor123_2026-01-15_v01_RESTRITO.pdf
SUBLOG_RELATORIO_Estrategico_2026_v01_CONFIDENCIAL.pdf
```

**Classificações:**
- PUBLICO (padrão, não precisa sufixo)
- RESTRITO
- CONFIDENCIAL
- SECRETO (se aplicável)

### 13.3 Documentos de Projetos Específicos

**Incluir código do projeto:**
```
[ORGAO]_[PROJETO]_[CATEGORIA]_[DESCRICAO]_[DATA]_[VERSAO].[extensao]
```

**Exemplos:**
```
SUBLOG_PROJ001_RELATORIO_AvancamentoObras_2026-01_v01.pdf
SUBLOG_MODERNIZACAO_PLANILHA_Orcamento_2026_v02.xlsx
```

### 13.4 Bases de Dados Relacionais

**Nomenclatura de Tabelas:**
```
[prefixo]_[nome_tabela]
```

**Exemplos:**
```
sublog_cadastro_fornecedores
sublog_estoque_materiais
sublog_movimentacao_mensal
```

**Nomenclatura de Campos:**
```
id_[tabela]         - Chave primária
fk_[tabela]         - Chave estrangeira
nome_[entidade]     - Nome descritivo
data_[acao]         - Datas
valor_[tipo]        - Valores numéricos
flag_[condicao]     - Booleanos
```

---

## 14. CHECKLIST DE CONFORMIDADE

### 14.1 Para Arquivos Geoespaciais

- [ ] Nome segue formato: `ORGAO_TEMA_DESCRICAO_ESCALA_ANO_VERSAO.extensao`
- [ ] Todos os campos obrigatórios preenchidos
- [ ] Sem caracteres especiais ou acentos
- [ ] Escala no formato correto (1-XXXk)
- [ ] Ano com 4 dígitos
- [ ] Versão iniciando com 'v' e 2 dígitos mínimo
- [ ] Extensão em minúsculas
- [ ] Sistema de referência: SIRGAS 2000
- [ ] Arquivo de metadados XML criado
- [ ] Atributos com nomes padronizados
- [ ] Domínios definidos para campos categóricos
- [ ] Documentação/README incluída

### 14.2 Para Arquivos Não Geoespaciais

- [ ] Nome segue formato: `ORGAO_CATEGORIA_DESCRICAO_DATA_VERSAO.extensao`
- [ ] Categoria pertence à lista padronizada
- [ ] Data no formato ISO 8601 (AAAA-MM-DD)
- [ ] Sem caracteres especiais ou acentos
- [ ] Versão iniciando com 'v' e 2 dígitos mínimo
- [ ] Extensão em minúsculas
- [ ] Metadados do documento preenchidos (autor, data, descrição)
- [ ] Arquivo salvo na pasta correta da estrutura
- [ ] Versões anteriores arquivadas (se aplicável)
- [ ] Documento classificado quanto ao acesso

### 14.3 Para Pastas e Estrutura

- [ ] Pastas em MAIÚSCULAS
- [ ] Sem espaços (usar underscore)
- [ ] Sem acentos
- [ ] Estrutura hierárquica lógica
- [ ] Arquivo README.txt na raiz explicando conteúdo
- [ ] Separação clara entre atual e histórico

---

## 15. GLOSSÁRIO DE ABREVIAÇÕES

### 15.1 Órgãos e Secretarias

| Sigla | Significado |
|-------|-------------|
| SUBLOG | Subsecretaria de Logística |
| SELOG | Secretaria de Logística e Transportes |
| SAESP | Sistema de Arquivos do Estado de São Paulo |

### 15.2 Categorias de Documentos

| Sigla/Termo | Significado |
|-------------|-------------|
| ATA | Ata de Reunião |
| CONTRATO | Contrato ou Termo Contratual |
| CRONOGRAMA | Cronograma de Atividades/Projetos |
| DADOS | Base de Dados Tabulares |
| DIAGRAMA | Diagrama ou Fluxograma |
| FOTO | Fotografia |
| MANUAL | Manual Técnico ou Operacional |
| MEMORANDO | Memorando Interno |
| NORMATIVO | Instrumento Normativo |
| OFICIO | Ofício Externo |
| PLANO | Plano Estratégico/Operacional |
| PLANILHA | Planilha de Dados ou Controle |
| PROCESSO | Processo Administrativo |
| RELATORIO | Relatório Técnico ou Gerencial |
| VIDEO | Vídeo ou Gravação |

### 15.3 Termos Técnicos Geoespaciais

| Sigla | Significado |
|-------|-------------|
| EPSG | European Petroleum Survey Group (códigos de SRC) |
| INDE | Infraestrutura Nacional de Dados Espaciais |
| MGB | Metadados Geoespaciais do Brasil |
| SRC | Sistema de Referência de Coordenadas |
| SIRGAS | Sistema de Referência Geocêntrico para as Américas |
| UTM | Universal Transverse Mercator |
| WGS84 | World Geodetic System 1984 |

### 15.4 Formatos de Arquivo

| Extensão | Significado |
|----------|-------------|
| .aprx | ArcGIS Pro Project |
| .csv | Comma-Separated Values |
| .docx | Microsoft Word Document |
| .geojson | Geographic JSON |
| .gpkg | GeoPackage |
| .jpg | Joint Photographic Experts Group |
| .kml | Keyhole Markup Language |
| .mxd | ArcMap Document |
| .pdf | Portable Document Format |
| .png | Portable Network Graphics |
| .pptx | Microsoft PowerPoint |
| .qgz | QGIS Compressed Project |
| .shp | Shapefile |
| .tif | Tagged Image File Format |
| .xlsx | Microsoft Excel |

---

## 16. EXEMPLOS PRÁTICOS COMPLETOS

### 16.1 Projeto de Mapeamento de Armazéns

**Contexto:** Levantamento de armazéns estaduais em 2026

**Estrutura de Pastas:**
```
PROJETO_MAPEAMENTO_ARMAZENS_2026/
├── 01_DOCUMENTOS/
│   ├── SUBLOG_PLANO_ProjetoMapeamentoArmazens_2026_v01.pdf
│   ├── SUBLOG_RELATORIO_LevantamentoCampo_2026-01_v01.pdf
│   └── SUBLOG_MANUAL_ProcedimentosCadastro_2026_v01.pdf
│
├── 02_DADOS_GEOESPACIAIS/
│   ├── SUBLOG_INFRAESTRUTURA_ArmazensEstaduais_1-10k_2026_v01.gpkg
│   ├── SUBLOG_INFRAESTRUTURA_ArmazensEstaduais_1-10k_2026_v01.xml
│   └── SUBLOG_LOGISTICA_AreaInfluenciaArmazens_1-50k_2026_v01.gpkg
│
├── 03_DADOS_TABULARES/
│   ├── SUBLOG_DADOS_CadastroArmazens_2026-01-21_v01.csv
│   └── SUBLOG_PLANILHA_AnaliseCapacidade_2026-01_v01.xlsx
│
├── 04_IMAGENS/
│   ├── SUBLOG_FOTO_ArmazemCentral_2026-01-15_001.jpg
│   ├── SUBLOG_FOTO_ArmazemCentral_2026-01-15_002.jpg
│   └── SUBLOG_DIAGRAMA_FluxoOperacional_2026_v01.png
│
└── 05_APRESENTACOES/
    └── SUBLOG_APRESENTACAO_ResultadosMapeamento_2026-01_v01.pptx
```

**Arquivo Vetorial Principal:**
```
Nome: SUBLOG_INFRAESTRUTURA_ArmazensEstaduais_1-10k_2026_v01.gpkg

Atributos:
- id_armazem (Integer)
- codigo_armazem (Text) - "ARM-SP-001"
- nome_armazem (Text)
- tipo_armazem (Text) - Domínio: ARMAZEM_GERAL, SILO, FRIGORIFICO, PATIO
- endereco_completo (Text)
- municipio (Text)
- uf (Text) - "SP"
- cep (Text)
- area_terreno_m2 (Float)
- area_coberta_m2 (Float)
- capacidade_toneladas (Float)
- situacao_operacional (Text) - Domínio: ATIVO, INATIVO, EM_REFORMA
- proprietario (Text) - Domínio: ESTADO, PRIVADO, MISTO
- data_inauguracao (Date)
- data_cadastro (Date)
- data_atualizacao (Date)
- responsavel_cadastro (Text)
- observacoes (Text)

Sistema de Referência: SIRGAS 2000 / UTM Zone 23S (EPSG:31983)
```

### 16.2 Relatório Mensal de Gestão

**Arquivo:** `SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf`

**Metadados (Propriedades do PDF):**
```
Título: Relatório de Gestão Mensal - Janeiro/2026
Assunto: Desempenho operacional e indicadores da Subsecretaria de Logística
Autor: João Silva
Palavras-chave: gestão, logística, indicadores, mensal, 2026
Data de Criação: 2026-01-21
Classificação: Público
Versão: 1.0
```

**Estrutura do Relatório:**
- Capa com identificação visual padronizada
- Sumário executivo
- Indicadores de desempenho
- Análises e gráficos
- Conclusões e recomendações
- Anexos (se houver)

### 16.3 Base de Dados de Estoque

**Arquivo:** `SUBLOG_DADOS_MovimentacaoEstoque_2026-01_v01.csv`

**Estrutura (Cabeçalho CSV):**
```csv
id_movimentacao,data_movimentacao,codigo_material,descricao_material,tipo_movimentacao,quantidade,unidade_medida,local_origem,local_destino,responsavel,numero_documento,observacoes
1,2026-01-15,MAT-001,Papel A4 - Resma 500fls,ENTRADA,100,RESMA,FORNECEDOR_123,ARMAZEM_CENTRAL,Maria Santos,NF-12345,Compra emergencial
2,2026-01-16,MAT-002,Caneta Esferográfica Azul,SAIDA,50,UNIDADE,ARMAZEM_CENTRAL,DEPTO_ADMIN,João Silva,REQ-456,Requisição mensal
```

**Codificação:** UTF-8  
**Delimitador:** Vírgula  
**Aspas:** Texto entre aspas quando contém vírgula  

---

## 17. SUPORTE E CONTATOS

### 17.1 Canais de Suporte

**Dúvidas sobre Nomenclatura:**
- E-mail: padronizacao.sublog@sp.gov.br
- Telefone: (11) XXXX-XXXX
- Chat interno: Canal #padronizacao-arquivos

**Suporte Técnico (GIS/TI):**
- E-mail: suporte.ti.sublog@sp.gov.br
- Ramal: XXXX

**Gestor de Dados (Data Steward):**
- Nome: [A definir]
- E-mail: [A definir]
- Ramal: [A definir]

### 17.2 Documentação Adicional

**Disponível em:**
- Intranet: `\\servidor\SUBLOG\PADRONIZACAO\`
- SharePoint: [Link]
- Portal de Dados: [Link]

**Documentos Complementares:**
- Manual Completo de Padronização (PDF)
- Guia Rápido de Referência (1 página)
- Video-tutoriais
- FAQ - Perguntas Frequentes
- Glossário Expandido

### 17.3 Atualizações desta Proposta

**Controle de Versões:**
- Versão 1.0 - 2026-01-21 - Proposta inicial
- Revisões serão publicadas conforme necessidade
- Sugestões de melhoria: padronizacao.sublog@sp.gov.br

---

## 18. APROVAÇÃO E VIGÊNCIA

### 18.1 Aprovação

**Elaborado por:**
- [Nome do Responsável]
- [Cargo]
- Data: 21/01/2026

**Revisado por:**
- [Nome do Revisor]
- [Cargo]
- Data: ___/___/______

**Aprovado por:**
- [Nome da Autoridade]
- [Cargo - Subsecretário de Logística]
- Data: ___/___/______

### 18.2 Vigência

**Início da Vigência:** ___/___/______  
**Prazo de Adequação:** 90 dias após publicação  
**Revisão Periódica:** Anual (ou conforme necessidade)

### 18.3 Revogações

Esta proposta, quando aprovada, revoga:
- [Listar instruções ou padrões anteriores, se houver]
- Ou: Não há documentos anteriores a serem revogados

---

## ANEXOS

### ANEXO A - Tabela Resumida de Padrões

| Tipo de Arquivo | Formato de Nomenclatura | Exemplo |
|------------------|-------------------------|---------|
| **Geoespacial Vetorial** | ORGAO_TEMA_DESCRICAO_ESCALA_ANO_VERSAO.ext | SUBLOG_LOGISTICA_Armazens_1-50k_2026_v01.gpkg |
| **Geoespacial Matricial** | ORGAO_TEMA_DESCRICAO_ESCALA_ANO_VERSAO.ext | SUBLOG_INFRAESTRUTURA_Ortofoto_1-5k_2026_v01.tif |
| **Documento Administrativo** | ORGAO_CATEGORIA_DESCRICAO_DATA_VERSAO.ext | SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf |
| **Planilha de Dados** | ORGAO_CATEGORIA_DESCRICAO_DATA_VERSAO.ext | SUBLOG_PLANILHA_Orcamento_2026_v01.xlsx |
| **Dados Tabulares** | ORGAO_DADOS_DESCRICAO_DATA_VERSAO.ext | SUBLOG_DADOS_Estoque_2026-01-21_v01.csv |
| **Apresentação** | ORGAO_APRESENTACAO_DESCRICAO_DATA_VERSAO.ext | SUBLOG_APRESENTACAO_Resultados_2026-01_v01.pptx |
| **Imagem/Foto** | ORGAO_FOTO_DESCRICAO_DATA_SEQUENCIA.ext | SUBLOG_FOTO_Instalacao_2026-01-15_001.jpg |

### ANEXO B - Lista de Verificação Rápida

**Antes de salvar um arquivo, verifique:**

✅ O nome está em PORTUGUÊS (sem acentos)?  
✅ NÃO há espaços (substituídos por _)?  
✅ A CATEGORIA está na lista padronizada?  
✅ A DATA está no formato AAAA-MM-DD?  
✅ A VERSÃO começa com 'v' e tem 2 dígitos?  
✅ A EXTENSÃO está em minúsculas?  
✅ O nome tem menos de 100 caracteres?  
✅ NÃO há caracteres especiais (/ \ : * ? " < > |)?  

**Para dados geoespaciais, adicionalmente:**

✅ A ESCALA está no formato 1-XXXk?  
✅ O ANO está presente (AAAA)?  
✅ O Sistema de Referência é SIRGAS 2000?  
✅ Os metadados foram preenchidos?  
✅ Os atributos seguem o padrão snake_case?  

### ANEXO C - Contatos e Responsáveis

| Função | Responsável | E-mail | Ramal |
|--------|-------------|--------|-------|
| Gestor de Dados | [Nome] | [email] | [ramal] |
| Suporte GIS | [Nome] | [email] | [ramal] |
| Suporte TI | [Nome] | [email] | [ramal] |
| Coordenador do Projeto | [Nome] | [email] | [ramal] |

---

**FIM DO DOCUMENTO**

---

*Este documento foi elaborado com base em instrumentos normativos vigentes e boas práticas nacionais e internacionais de gestão de dados e informações. Sua aplicação visa garantir a padronização, interoperabilidade e qualidade dos dados da Subsecretaria de Logística do Estado de São Paulo.*
