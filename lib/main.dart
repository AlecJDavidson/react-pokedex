import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:pokedex/style.dart';
import 'package:pokedex/utils.dart';

void main() {
  runApp(PokedexApp());
}

class PokedexApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(fontFamily: 'Quicksand'),
      home: Pokedex(),
    );
  }
}

class Pokedex extends StatefulWidget {
  Pokedex({Key key}) : super(key: key);

  @override
  _PokedexState createState() => _PokedexState();
}

class _PokedexState extends State<Pokedex> {
  // stateful var here
  var _something = '';



 

// // sets background color for pokemon by type
  void _setColor(types, color) {
    setState(
      () {
        if (types[0] == 'normal') {
          color = normal;
        
        }});}
      
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: primary, // primaryColor imports from data.dart
      body: Center(
        child: Column(
          children: <Widget>[
            // InputBar
            Expanded(
              flex: 1,
              child: Container(
                  child: Row(
                children: [
                  // TextButton.icon(onPressed: )), icon: Icon(Icons.arrow_back), label: Text(''),)
                ],
              )),
            ),
            Expanded(
              flex: 10,
              child: Container(
                  child: Row(
                children: [FloatingActionButton(onPressed: null)],
              )),
            ),
          ],
        ),
      ),
    );
  }
}
