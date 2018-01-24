export default {
  aor: {
      action: {
          delete: 'Zmazať',
          show: 'Ukázať',
          list: 'Zoznam',
          save: 'Uložiť',
          create: 'Vytvoriť',
          edit: 'Upraviť',
          cancel: 'Zrušiť',
          refresh: 'Obnoviť',
          add_filter: 'Pridať filter',
          remove_filter: 'Odstrániť filter',
          back: 'Späť',
      },
      boolean: {
          true: 'Áno',
          false: 'Nie',
      },
      page: {
          list: 'Zoznam %{name}',
          edit: '%{name} #%{id}',
          show: '%{name} #%{id}',
          create: 'Vytvoriť %{name}',
          delete: 'Zmazať %{name} #%{id}',
          dashboard: 'Dashboard',
          not_found: 'Nenájdené',
      },
      input: {
          file: {
              upload_several:
                'Pretiahnite súbory pre nahranie alebo kliknite a vyberte.',
              upload_single:
                'Pretiahnite súbor pre nahranie alebo kliknite a vyberte.',
          },
          image: {
              upload_several:
                  'Pretiahnite obrázky pre nahranie alebo kliknite a vyberte.',
              upload_single:
                  'Pretiahnite obrázok pre nahranie alebo kliknite a vyberte.',
          },
      },
      message: {
          yes: 'Áno',
          no: 'Nie',
          are_you_sure: 'Ste si isti?',
          about: 'O',
          not_found:
              'Zadali ste zlú adresu URL alebo link.',
      },
      navigation: {
          no_results: 'Žiadne výsledky',
          page_out_of_boundaries: 'Číslo strany %{page} mimo rozsah',
          page_out_from_end: 'Nedá sa ísť za poslednú stranu',
          page_out_from_begin: 'Nedá sa ísť pred stranu 1',
          page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
          next: 'Ďalší',
          prev: 'Predošlý',
      },
      auth: {
          username: 'Užívateľské meno',
          password: 'Heslo',
          sign_in: 'Prihlásiť',
          sign_in_error: 'Overenie zlyhalo, skuste to znova',
          logout: 'Odhlásiť',
      },
      notification: {
          updated: 'Záznam aktualizovaný',
          created: 'Záznam vytvorený',
          deleted: 'Záznam zmazaný',
          item_doesnt_exist: 'Záznam neexistuje',
          http_error: 'Chyba komunikácie serveru',
      },
      validation: {
          required: 'Požadovaný',
          minLength: 'Musí byť najmenej %{min} znakov',
          maxLength: 'Môže byť najviac %{max} znakov',
          minValue: 'Musí byť najmenej %{min}',
          maxValue: 'Môže byť najviac %{max}',
          number: 'Musí byť číslo',
          email: 'Musí byť valídna emailová adresa',
      },
  },
};