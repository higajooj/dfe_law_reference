# Serviços de Manutenção e Distribuição do CNC NFS-e

## NSU do CNC NFS-e

O NSU Cadastro é uma identificação única para cada contribuinte gerada no momento de sua inclusão no CNC NFSe. Esta identificação fará parte do retorno da solicitação de movimentação das informações. Importante salientar que os registros recuperados a partir de um NSU de cadastro trará as informações atuais do(s) contribuinte(s) no CNC e não as informações iniciais do seu cadastro.

O NSU Movimento é uma identificação gerada para cada solicitação de movimentação de informações. Esta identificação fará parte do retorno da solicitação de movimentação de informações e é sequencial para toda movimentação do CNC NFSe, independentemente de qual seja o município solicitante. A cada movimentação de informações solicitadas por qualquer município para qualquer contribuinte o NSU de movimentação é acrescido.

## Manutenção do CNC NFS-e

O objetivo deste serviço é a manutenção do CNC NFS-e pelos municípios conveniados ao Sistema Nacional NFS-e.

Para a manutenção das bases das informações dos contribuintes do município o mesmo deverá solicitar a movimentação das informações pela API CNC método POST. Neste método serão enviadas as informações para inclusão ou alteração.

No processamento da movimentação solicitada será verificado se já existe informações registradas para o contribuinte no município, para a inscrição municipal informada. Caso ainda não exista informações para a chave informada será considerada uma movimentação de inclusão.

Independentemente de ser uma movimentação de inclusão ou alteração deverão ser enviadas todas as informações do contribuinte. Na movimentação de alteração serão sobrepostas as informações enviadas sobre aquelas já registradas.

Para cada movimentação solicitada que altere as informações do contribuinte será gerado um histórico da situação anterior. Esse procedimento além de prover mais segurança e possibilidade de verificações posteriores atende ao requisito de vigência das informações, ou seja, na geração de uma NFS-e onde o município faça opção por utilizar CNC NFS-e, as informações serão recuperadas levando-se em consideração a vigências dessas informações e a data de competência da nota fiscal.

## Distribuição do CNC NFSe

Para o solicitar a distribuição do CNC NFSe o município deverá utilizar o método GET da API CNC.

O CNC NFSe poderá ser recuperado integralmente ou a partir de um NSU informado. Neste caso o município deverá utilizar o método Get/distribCNC. Este método irá recuperar os registros a partir do NSU de cadastro ou NSU de movimentação informado. Neste método poderão ser informados também filtros opcionais como CNPJ/CPF, IM ou código do município.

<!-- p.05 -->

Para recuperar registro específico do cadastro do município, deverá utilizar o método Get/cncUnico. Este método irá recuperar o registro identificado pelo NSU de cadastro ou pelo NSU de movimento informado. Neste método não haverá possiblidade de informar filtros adicionais já que o retorno é apenas um registro.

Como explanado no item anterior para a distribuição CNC NFSe, o município deverá utilizar o método GET da API CNC. A distribuição do cadastro poderá ser solicitada informando o NSU de cadastro, o NSU de movimento e filtros opcionais como CNPJ/CPF, IM ou código do município.
