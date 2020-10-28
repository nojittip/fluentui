// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-1"`,
      src: `url('${baseUrl}fabric-icons-1-360e3054.woff') format('woff')`
    },
    icons: {
      Financial: '\uE7BB',
      Education: '\uE7BE',
      ShoppingCart: '\uE7BF',
      Train: '\uE7C0',
      Move: '\uE7C2',
      TouchPointer: '\uE7C9',
      Merge: '\uE7D5',
      TurnRight: '\uE7DB',
      Ferry: '\uE7E3',
      Highlight: '\uE7E6',
      PowerButton: '\uE7E8',
      Tab: '\uE7E9',
      Admin: '\uE7EF',
      TVMonitor: '\uE7F4',
      Speakers: '\uE7F5',
      Game: '\uE7FC',
      UnstackSelected: '\uE7FE',
      StackIndicator: '\uE7FF',
      Nav2DMapView: '\uE800',
      StreetsideSplitMinimize: '\uE802',
      Car: '\uE804',
      Bus: '\uE806',
      EatDrink: '\uE807',
      SeeDo: '\uE808',
      LocationCircle: '\uE80E',
      Home: '\uE80F',
      SwitcherStartEnd: '\uE810',
      ParkingLocation: '\uE811',
      IncidentTriangle: '\uE814',
      Touch: '\uE815',
      MapDirections: '\uE816',
      CaretHollow: '\uE817',
      CaretSolid: '\uE818',
      History: '\uE81C',
      Location: '\uE81D',
      MapLayers: '\uE81E',
      SearchNearby: '\uE820',
      Work: '\uE821',
      Recent: '\uE823',
      Hotel: '\uE824',
      Bank: '\uE825',
      LocationDot: '\uE827',
      Dictionary: '\uE82D',
      ChromeBack: '\uE830',
      FolderOpen: '\uE838',
      PinnedFill: '\uE842',
      RevToggleKey: '\uE845',
      USB: '\uE88E',
      Previous: '\uE892',
      Next: '\uE893',
      Sync: '\uE895',
      Help: '\uE897',
      Emoji: '\uE899',
      MailForward: '\uE89C',
      ClosePane: '\uE89F',
      OpenPane: '\uE8A0',
      PreviewLink: '\uE8A1',
      ZoomIn: '\uE8A3',
      Bookmarks: '\uE8A4',
      Document: '\uE8A5',
      ProtectedDocument: '\uE8A6',
      OpenInNewWindow: '\uE8A7',
      MailFill: '\uE8A8',
      ViewAll: '\uE8A9',
      Switch: '\uE8AB',
      Rename: '\uE8AC',
      Go: '\uE8AD',
      Remote: '\uE8AF',
      SelectAll: '\uE8B3',
      Orientation: '\uE8B4',
      Import: '\uE8B5',
      Picture: '\uE8B9',
      ChromeClose: '\uE8BB',
      ShowResults: '\uE8BC',
      Message: '\uE8BD',
      CalendarDay: '\uE8BF',
      CalendarWeek: '\uE8C0',
      MailReplyAll: '\uE8C2',
      Read: '\uE8C3',
      Cut: '\uE8C6',
      PaymentCard: '\uE8C7',
      Copy: '\uE8C8',
      Important: '\uE8C9',
      MailReply: '\uE8CA',
      GotoToday: '\uE8D1',
      Font: '\uE8D2',
      FontColor: '\uE8D3',
      FolderFill: '\uE8D5',
      Permissions: '\uE8D7',
      DisableUpdates: '\uE8D8',
      Unfavorite: '\uE8D9',
      Italic: '\uE8DB',
      Underline: '\uE8DC',
      Bold: '\uE8DD',
      MoveToFolder: '\uE8DE',
      Dislike: '\uE8E0',
      Like: '\uE8E1',
      AlignCenter: '\uE8E3',
      OpenFile: '\uE8E5',
      FontDecrease: '\uE8E7'
    }
  };

  registerIcons(subset, options);
}