Ext.application({
    
name: 'Examen parcial',
launch: function () {
 


 Ext.create('Ext.form.Panel', {
    fullscreen: true,
    items: [
        {
            xtype: 'fieldset',
            id:'formulario',
            title: 'Examen parcial',
            instructions: 'proporciona el subtotal',
            items: [
                {
                    xtype: 'textfield',
                    name : 'subtotal',
                    id:'subtotal',
                    label: 'subtotal:'
                },
                {
                    xtype: 'textfield',
                    name : 'iva',
                    id:'iva',
                    label: 'iva:'
                },
                {
                    xtype: 'textfield',
                    name : 'riva',
                    id:'riva',
                    label: 'retencion iva:'
                },
                {
                    xtype: 'textfield',
                    name : 'isr',
                    id:'isr',
                    label: 'isr:'
                },
                {
                    xtype: 'textfield',
                    name : 'total',
                    id:'total',
                    label: 'total:'
                },
                {
                    xtype:'button',
                    text:'calcular',
                    ui:'confirm',
                    handler:function(){
                        var subtotal=Ext.getCmp('subtotal').getValue();
                        var iva=subtotal*0.16;
                        var ret_iva=(iva/3)*2;
                        var isr=subtotal*0.10;
                        var total=(subtotal)-(iva)+(ret_iva)-isr;
                       
                     
                      Ext.getCmp('iva').setValue(iva);
                        Ext.getCmp('riva').setValue(ret_iva);
                        Ext.getCmp('isr').setValue(isr);
                        Ext.getCmp('total').setValue(total);
                      Ext.getCmp('formulario').setInstructions('el subtotal es: '+subtotal+'  el iva es: '+iva+'  la retencion de iva es:  '+ret_iva+'  el isr es:  '+isr+'  total es:  '+total);
                      
                    }
                }
                
                
            ]
        }
        
        
    ]
});

    }
});


