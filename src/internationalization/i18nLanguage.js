import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'blog': "Blog",
                    'blog_create': "Blog Create",
                    'blog_update': "Blog Update",
                    'blog_delete': "Blog Delete",
                    'blog_all_delete':"Blog All Delete",
                    'blog_list': "Blog List",
                    'blog_id': "Blog ID",
                    'blog_header': "Blog Header",
                    'blog_content': "Blog Content",
                    'date': "Date",
                    'update': "Update",
                    'view': "View",
                    'delete': "Delete",
                }
            },
        tr:
            {
                translations: {
                    'homepage': "AnaSayfa",
                    'about': "Hakkımızda",
                    'blog': "Blog",
                    'blog_create': "Blog Oluştur",
                    'blog_update': "Blog Güncelle",
                    'blog_delete': "Blog Sil",
                    'blog_all_delete':"Blog Bütün Verileri Sil",
                    'blog_list': "Blog Listesi",
                    'blog_id': "Blog ID",
                    'blog_header': "Blog Başlığı",
                    'blog_content': "Blog İçeriği",
                    'date': "Tarih",
                    'update': "Güncelle",
                    'view': "Göster",
                    'delete': "Sil",
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;