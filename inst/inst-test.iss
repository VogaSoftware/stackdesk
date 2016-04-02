[Files]
Source: ..\VclStylesinno.dll; DestDir: {app}; Flags: dontcopy
Source: ..\Styles\Amakrits.vsf; DestDir: {app}; Flags: dontcopy

[Setup]
AppName=monay muddafuka
AppVersion=666

[Code]
// Import the LoadVCLStyle function from VclStylesInno.DLL
procedure LoadVCLStyle(VClStyleFile: String); external 'LoadVCLStyleW@files:VclStylesInno.dll stdcall';
// Import the UnLoadVCLStyles function from VclStylesInno.DLL
procedure UnLoadVCLStyles; external 'UnLoadVCLStyles@files:VclStylesInno.dll stdcall';

function InitializeSetup(): Boolean;
begin
  ExtractTemporaryFile('Amakrits.vsf');
  LoadVCLStyle(ExpandConstant('{tmp}\Amakrits.vsf'));
  Result := True;
end;

procedure DeinitializeSetup();
begin
  UnLoadVCLStyles;
end;