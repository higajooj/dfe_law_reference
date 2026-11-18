<!-- p.07 -->

# 3.a Novos Fatos Geradores

Em relação às operações que serão formalizadas por NFS-e e que são enquadradas como novos fatos geradores, no campo de incidência do IBS e da CBS, mas que não eram operações formalizadas por documento fiscal, deve-se esclarecer alguns pontos:

### Haverá códigos específicos para essas operações

Conforme descritos na Nota Técnica SE/CGNFS-e nº 005, de 19 de novembro de 2025, os novos fatos geradores deverão ser formalizados a partir da informação dos novos códigos (“cTribNac”) que serão criados:

| Código | Descrição |
|---|---|
| 99.02.01 | Operações com Bens Imateriais Não Classificados em Itens Anteriores |
| 99.03.01 | Locação de Bens Imóveis |
| 99.03.02 | Cessão Onerosa de Bens Imóveis |
| 99.03.03 | Arrendamento de Bens Imóveis |
| 99.03.04 | Servidão, Cessão de Uso ou de Espaço de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN) |
| 99.03.05 | Permissão de Uso ou Direito de Passagem de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN) |
| 99.04.01 | Locação de Bens Móveis |

**Observação**: o código “99.01.01 - Outros serviços sem a incidência de ISSQN e ICMS”, atualmente vigente na plataforma nacional NFS-e, deverá ser utilizado somente quando houver operação que eventualmente incida IBS ou CBS, mas não o ISSQN, **e que não se enquadre em nenhum dos casos descritos na tabela acima.**

<!-- p.08 -->

### As autorizações de NFS-e relativas a essas operações deverão ser processadas diretamente na plataforma nacional

Os documentos fiscais desses novos fatos geradores deverão ser autorizados exclusiva e diretamente pelos Emissores Públicos Nacionais (Sefin Nacional), seja via API, seja via Emissor Web, seja via emissor para dispositivos móveis (APP), se for o caso. Esses documentos não deverão ser autorizados nos sistemas próprios dos municípios para posterior compartilhamento com o repositório nacional. Caso os municípios autorizem esses documentos fiscais em seus sistemas próprios, eles serão rejeitados ao serem compartilhados com o ADN (repositório nacional) da NFS-e.

### Todas as pessoas, físicas ou jurídicas, estarão autorizadas a emitir esses documentos na plataforma nacional

Conforme esclarecido acima, como os documentos que formalizarão essas operações, consideradas como novos fatos geradores, serão autorizados no ambiente nacional, inicialmente todo CPF e todo CNJP será autorizado a utilizar os emissores públicos nacionais disponíveis (API, Web ou APP), mesmo que o seu Município de domicílio/estabelecimento tenha optado por não utilizar os emissores públicos nacionais, conforme parametrização no Painel Administrativo Municipal.

### As evoluções da plataforma NFS-e para a formalização dos documentos fiscais dessas operações estão em desenvolvimento

Em razão dos ajustes necessários para a formalização dessas operações, o *layout* da NFS-e e os Emissores Públicos Nacionais estão sendo adaptados para refletirem essas evoluções, a exemplo daquelas trazidas nesta NT e na NT SE/CGNFS-e nº 005. Essas evoluções ainda não estão disponíveis e o cronograma dessas implantações será publicado no portal da NFS-e.
