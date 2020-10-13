if (!merge[0].complexity) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image source={{uri:'https://www.mageworx.com/blog/wp-content/uploads/2012/06/Page-Not-Found-13.jpg'}} style={{width:100,height:100}}/>
      </View>
    );
  }

  return (
    <ScrollView>
      {!urlImage ? (
        <Text>WAITING</Text>
      ) : (
        <Image source={{ uri: urlImage }} style={styles.image} />
      )}

      <View>
        <View style={styles.details}>
          <DefaultText>{merge[0].duration}m</DefaultText>
          <DefaultText>{merge[0].complexity.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {merge[0].ingredients.map((ingredients) => (
          <ListItem key={ingredients}>{ingredients}</ListItem>
        ))}
        <Text style={styles.title}>Step</Text>
        {merge[0].steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
