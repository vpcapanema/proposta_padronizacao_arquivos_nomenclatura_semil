# GUIA RÁPIDO - PADRONIZAÇÃO DE NOMENCLATURA
## Subsecretaria de Logística - Estado de São Paulo

---

## 📋 RESUMO EXECUTIVO

### Para Arquivos GEOESPACIAIS:
```
SUBLOG_[TEMA]_[DESCRICAO]_[ESCALA]_[ANO]_v01.[extensao]
```
**Exemplo:** `SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.gpkg`

### Para Arquivos NÃO GEOESPACIAIS:
```
SUBLOG_[CATEGORIA]_[DESCRICAO]_[DATA]_v01.[extensao]
```
**Exemplo:** `SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf`

---

## ✅ REGRAS BÁSICAS

### PERMITIDO:
- Letras sem acentos (A-Z, a-z)
- Números (0-9)
- Underscore (_) para separação
- Hífen (-) apenas em datas
- Ponto (.) só antes da extensão

### ❌ NÃO PERMITIDO:
- Espaços
- Acentos (á, é, í, ó, ú, ã, õ, ç)
- Caracteres especiais (/ \ : * ? " < > | # % & @ !)

---

## 📁 CATEGORIAS PRINCIPAIS

| Categoria | Use quando... |
|-----------|---------------|
| **RELATORIO** | Relatórios técnicos ou gerenciais |
| **CONTRATO** | Contratos, termos aditivos |
| **PLANO** | Planos estratégicos ou operacionais |
| **PLANILHA** | Planilhas de controle/análise |
| **DADOS** | Bases de dados tabulares (CSV, Excel) |
| **ATA** | Atas de reuniões |
| **MEMORANDO** | Comunicações internas |
| **OFICIO** | Comunicações oficiais externas |
| **APRESENTACAO** | Slides e apresentações |
| **FOTO** | Fotografias |
| **MANUAL** | Manuais e procedimentos |

---

## 📅 FORMATO DE DATAS

```
AAAA-MM-DD  →  2026-01-21  (completa)
AAAA-MM     →  2026-01     (mensal)
AAAA        →  2026        (anual)
```

---

## 🔢 VERSIONAMENTO

```
v01  →  Primeira versão
v02  →  Segunda versão (mudança significativa)
v01.1 →  Revisão menor da versão 1
```

**Quando incrementar:**
- Mudança grande → v01 para v02
- Correção pequena → v01 para v01.1

---

## 🗺️ DADOS GEOESPACIAIS

### Formato:
```
SUBLOG_[TEMA]_[DESCRICAO]_[ESCALA]_[ANO]_v01.[extensao]
```

### Temas Comuns:
- **LOGISTICA** - Centros de distribuição, rotas
- **TRANSPORTE** - Rodovias, ferrovias
- **INFRAESTRUTURA** - Armazéns, instalações
- **TERRITORIAL** - Limites administrativos

### Escalas:
```
1-5k    - Detalhado (1:5.000)
1-10k   - Muito detalhado (1:10.000)
1-50k   - Detalhado (1:50.000)
1-100k  - Médio (1:100.000)
1-250k  - Geral (1:250.000)
```

### Formatos Recomendados:
- ✅ **GeoPackage (.gpkg)** - PREFERENCIAL
- ✅ **Shapefile (.shp)** - Compatibilidade
- ✅ **GeoJSON (.geojson)** - Web/APIs
- ✅ **GeoTIFF (.tif)** - Dados matriciais

### Sistema de Referência:
**Sempre usar:** SIRGAS 2000 / UTM Zone 23S (EPSG:31983)

---

## 📄 EXEMPLOS PRÁTICOS

### Documentos Administrativos:
```
✅ SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf
✅ SUBLOG_MEMORANDO_SolicitacaoRecursos_2026-01-15_v01.docx
✅ SUBLOG_ATA_ReuniaoGerencial_2026-01-10_v01.docx
```

### Contratos:
```
✅ SUBLOG_CONTRATO_PregaoEletronico_123-2026_v01.pdf
✅ SUBLOG_TERMOADITIVO_Contrato123-2026_2026-01-21_v01.pdf
```

### Planejamento:
```
✅ SUBLOG_PLANO_EstratégicoLogistica_2026-2030_v01.pdf
✅ SUBLOG_PLANILHA_OrcamentoAnual_2026_v03.xlsx
✅ SUBLOG_CRONOGRAMA_ProjetoModernizacao_2026_v02.xlsx
```

### Dados Tabulares:
```
✅ SUBLOG_DADOS_InventarioEstoque_2026-01-21_v01.csv
✅ SUBLOG_DADOS_CadastroFornecedores_2026-01-21_v01.xlsx
```

### Apresentações:
```
✅ SUBLOG_APRESENTACAO_ResultadosAno_2025_v01.pptx
```

### Imagens:
```
✅ SUBLOG_FOTO_VisitaTecnicaArmazem_2026-01-15_001.jpg
✅ SUBLOG_DIAGRAMA_FluxoProcessos_2026_v02.png
```

### Dados Geoespaciais:
```
✅ SUBLOG_LOGISTICA_CentrosDistribuicao_1-50k_2026_v01.gpkg
✅ SUBLOG_TRANSPORTE_RotasAbastecimento_1-250k_2026_v02.shp
✅ SUBLOG_INFRAESTRUTURA_ArmazensEstaduais_1-10k_2026_v01.geojson
✅ SUBLOG_LOGISTICA_MapaCalorDemanda_1-100k_2026_v01.tif
```

---

## ❌ ERROS COMUNS

### Não Fazer:
```
❌ Relatório Mensal Janeiro 2026.pdf  (espaços, acentos)
❌ relatorio_gestao_jan_26.pdf  (abreviações, ano incompleto)
❌ SUBLOG-RELATORIO-GestaoMensal.pdf  (hífens no lugar de underscore)
❌ SUBLOG_RELATÓRIO_2026-01.pdf  (acento)
❌ Sublog_relatorio_gestao_2026.pdf  (mistura maiúsculas/minúsculas)
❌ SUBLOG_RELATORIO_GestaoMensal_2026-01-21.pdf  (sem versão)
❌ SUBLOG_RELAT_GestaoMen_2026-01_v1.pdf  (abreviações não padronizadas, v1 ao invés de v01)
```

### Fazer:
```
✅ SUBLOG_RELATORIO_GestaoMensal_2026-01_v01.pdf
```

---

## 🔍 CHECKLIST RÁPIDO

Antes de salvar, pergunte:

- [ ] Está sem espaços?
- [ ] Está sem acentos?
- [ ] A categoria está correta?
- [ ] A data está no formato AAAA-MM-DD?
- [ ] Tem versão (v01)?
- [ ] A extensão está em minúsculas?
- [ ] Tem menos de 100 caracteres?

---

## 📞 DÚVIDAS?

**E-mail:** padronizacao.sublog@sp.gov.br  
**Telefone:** (11) XXXX-XXXX  
**Chat:** #padronizacao-arquivos

---

## 📚 DOCUMENTAÇÃO COMPLETA

Para detalhes completos, consulte:
- **Proposta Completa de Padronização** (`proposta_padronizacao_nomenclatura.md`)
- **Pesquisa de Instrumentos Normativos** (`pesquisa_normas.md`)

---

**Versão:** 1.0  
**Data:** 21/01/2026  
**Subsecretaria de Logística - Estado de São Paulo**
