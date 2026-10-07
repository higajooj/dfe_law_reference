<!-- p.10 -->
# 03.8 Validação da parte específica do evento

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P15-10 | Número de sequência do Evento maior que 20 | Obrig. | 594 | Rejeição: Número de sequência do evento informado é maior que o permitido |
| P20-10 | Se tpAutor=1-Empresa Emitente:<br>- UF do Autor (cOrgaoAutor) diverge da UF da Chave de Acesso | Obrig. | 455 | Rejeição: Órgão Autor do evento difere da UF da Chave de Acesso |
| ~~P21-10~~ | ~~Tipo do Autor difere de “1=Empresa Emitente”, “2=Empresa destinatária” ou “3=Empresa Transportador Contratado.~~ | ~~Obrig.~~ | ~~466~~ | ~~Rejeição: Evento com Tipo de Autor incompatível~~ |
| P24-10 | Se informado CNPJ autorizado:<br>– CNPJ com zeros ou dígito inválido | Obrig. | 323 | Rejeição: CNPJ autorizado para download inválido |
| P25-10 | Se informado CPF autorizado:<br>– CPF com zeros ou dígito inválido | Obrig. | 325 | Rejeição: CPF autorizado para download inválido |
| P26-10 | Se autor do evento for o emitente ou destinatário da NF-e:<br>- Obrigatório o preenchimento do campo tpAutorizacao | Obrig | 827 | Rejeição: Obrigatório informar o tipo de autorização |
| P26-20 | Se autor do evento não for o emitente ou destinatário da NF-e:<br>- Preenchimento do campo tpAutorizacao não é permitido | Obrig | 828 | Rejeição: Não permitido informar o campo tipo de autorização |
| P27-10 | Se informado tpAutorizacao igual 1:<br>- Obrigatório informar o campo xCondUso, declarando que está ciente da permissão para o transportador | Obrig. | 829 | Rejeição: Condição de uso não informado para o tipo de autorização de uso |
| P27-20 | Se informado tpAutorizacao diferente de 1:<br>- Preenchimento do campo xCondUso não é permitido | Obrig | 830 | Rejeição: Não permitido preencher o campo Condição de Uso |
| H03 | Verificar prazo de recepção do evento, em relação a data da autorização da NF-e<br>Obs: 6 meses | Obrig. | 596 | Rejeição: Evento apresentado fora do prazo: [prazo vigente] |
| 2P21-10 | - Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: Autor do evento diverge do destinatário da NF-e |
| 2P21-14 | - Se tpAutor=2-Empresa Destinatário:<br>- Modalidade de Frete não é por conta do Destinatário (modFrete<>1 e 4) | Obrig. | 449 | Rejeição: Modalidade de Frete não é por conta do Destinatário |
| 2P24-10 | - CNPJ/CPF autorizado neste evento idêntico ao CNPJ/CPF do Emitente | Obrig. | 421 | Rejeição: Informado o CNPJ/CPF do Emitente |
| P24-14 | - CNPJ/CPF autorizado neste evento idêntico ao CNPJ/CPF do Destinatário | Obrig. | 422 | Rejeição: Informado o CNPJ/CPF do Destinatário |
| **<!-- p.11 -->\*\*\* Banco de Dados: NF-e** | | | | |
| 2P12-10 | Acesso BD NFE (Chave: Chave de Acesso):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (\*1) | Obrig. | 494 | Rejeição: Chave de Acesso Inexistente |
| 2P12-22 | - Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rejeição: Evento exige uma NF-e autorizada |
| 2P13-10 | - Data do evento menor que a Data de Emissão da NF-e (\*1) | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | - Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>Nota: Tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| P24-18 | - CNPJ/CPF autorizado neste evento já está autorizado a acessar o XML da NF-e (leiaute NF-e, tag: autXML, Id:GA01) | Obrig. | 423 | Rejeição: CNPJ/CPF já está autorizado a acessar o XML da NF-e |
| **\*\*\* Banco de Dados: Evento** | | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento, cOrgaoAutor):<br>- Evento já existente (\*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |
| **\*\*\* Banco de Dados: Evento 2** | | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento=110150):<br>- CNPJ/CPF autorizado neste evento já está autorizado a acessar o XML da NF-e | Obrig. | 423 | Rejeição: CNPJ/CPF já está autorizado a acessar o XML da NF-e |
| 3P15-20 | - Evento do BD possui tpAutorizacao=0 para CPF/CNPJ autorizado igual ao CPF/CNPJ autorizado do autor do evento atual. | Obrig. | 831 | Rejeição: Transportador Contratado não autorizado a a liberar acesso a NF-e |
| 3P15-21 | ~~Se tpAutor=3-Transportador Contratado~~<br>~~- Acesso ao BD de Eventos (Chave: Chave de Acesso, tpEvento=110150):~~<br>~~Se não Existe CNPJ/CPF autorizado = CNPJ do Autor do evento atual com tpAutorizacao = 1?~~<br>- Se não existe evento no banco de dados para o autor do evento atual e para a chave indicada | Obrig. | 585 | Rejeição: Transportador não autorizado a emitir evento para esse documento fiscal. |
| **\*\*\* Banco de Dados: Cadastro Centralizado de Contribuintes** | | | | |
| 4P21-10 | Se tpAutor=3-Transportador Contratado:<br>- Acesso Cadastro Centralizado de Contribuintes (Chave: cOrgaoAutor, CNPJ/CPF Autor):<br>- CNPJ/CPF Autor do evento não é emitente de CT-e (nenhum Modal), ou não está ativo para a UF | Obrig. | 448 | Rejeição: CNPJ/CPF Autor não é emitente de CT-e |
| 4P24-10 | Acesso CCC-Cadastro Centralizado de Contribuintes (Chave: ~~cOrgaoAutor~~, CNPJ/CPF Autorizado):<br>- CNPJ/CPF autorizado neste evento não é emitente de CT-e (nenhum Modal), ou não está ativo para a UF | Obrig. | 371 | Rejeição: CNPJ/CPF Autorizado não é emitente de CT-e |

> **Revogado/Descontinuado:** regras P21-10 e o trecho inicial da regra 3P15-21 riscados no original. No item 4P24-10, o termo “cOrgaoAutor” também está riscado.

(\*1) Essa regra somente deve ser aplicada se tpAutor=1
