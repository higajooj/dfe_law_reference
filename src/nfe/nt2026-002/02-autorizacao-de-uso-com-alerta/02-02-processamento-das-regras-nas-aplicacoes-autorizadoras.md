<!-- p.5 -->
# 2.2. Processamento das Regras nas Aplicações Autorizadoras

As SEFAZ Autorizadoras processam as regras de validação descritas no Manual de Orientação do Contribuinte da NF-e / NFC-e (MOC). As regras de validação identificadas como “Alerta” registram a ocorrência do alerta, mas não interrompem o processamento da NF-e (regra de validação “não fatal”).

- A regra de validação que tenha como efeito um alerta provoca o armazenamento do código correspondente à regra não atendida, **até um limite de 5 (cinco) códigos de alerta**. Ou seja, somente serão retornados os primeiros 5 alertas identificados;
- O não atendimento de alguma regra de validação que tenha como efeito uma rejeição interromperá o processamento das demais regras, retornando a rejeição e os códigos de alerta identificados até o momento;
- Ao final do processamento das regras de validação será montada a mensagem de retorno do Web Service - com a autorização de uso da NF-e ou com o código de rejeição, contendo, se houver, os códigos de alerta conforme o resultado das validações efetuadas.
